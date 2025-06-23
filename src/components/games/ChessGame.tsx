
import React, { useState, useEffect } from 'react';
import { ArrowLeft, RotateCcw, Trophy, Clock, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Position {
  row: number;
  col: number;
}

interface Piece {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
  position: Position;
  hasMoved?: boolean;
}

interface ChessGameProps {
  onBack: () => void;
  onComplete: (score: number) => void;
}

const ChessGame: React.FC<ChessGameProps> = ({ onBack, onComplete }) => {
  const [board, setBoard] = useState<(Piece | null)[][]>([]);
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<'white' | 'black'>('white');
  const [gameStatus, setGameStatus] = useState<'playing' | 'checkmate' | 'stalemate' | 'draw'>('playing');
  const [moveHistory, setMoveHistory] = useState<string[]>([]);
  const [capturedPieces, setCapturedPieces] = useState<{ white: Piece[], black: Piece[] }>({ white: [], black: [] });
  const [gameTime, setGameTime] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);

  // Initialize chess board
  const initializeBoard = (): (Piece | null)[][] => {
    const newBoard: (Piece | null)[][] = Array(8).fill(null).map(() => Array(8).fill(null));
    
    // Place pawns
    for (let col = 0; col < 8; col++) {
      newBoard[1][col] = { type: 'pawn', color: 'black', position: { row: 1, col } };
      newBoard[6][col] = { type: 'pawn', color: 'white', position: { row: 6, col } };
    }

    // Place other pieces
    const backRowPieces: ('rook' | 'knight' | 'bishop' | 'queen' | 'king' | 'bishop' | 'knight' | 'rook')[] = 
      ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    
    for (let col = 0; col < 8; col++) {
      newBoard[0][col] = { type: backRowPieces[col], color: 'black', position: { row: 0, col } };
      newBoard[7][col] = { type: backRowPieces[col], color: 'white', position: { row: 7, col } };
    }

    return newBoard;
  };

  useEffect(() => {
    setBoard(initializeBoard());
    const timer = setInterval(() => {
      setGameTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simple AI for computer moves
  const makeComputerMove = () => {
    const validMoves = getAllValidMoves('black');
    if (validMoves.length === 0) return;

    // Simple AI: prioritize captures, then random moves
    const captures = validMoves.filter(move => board[move.to.row][move.to.col] !== null);
    const selectedMove = captures.length > 0 ? 
      captures[Math.floor(Math.random() * captures.length)] : 
      validMoves[Math.floor(Math.random() * validMoves.length)];

    makeMove(selectedMove.from, selectedMove.to);
  };

  const getAllValidMoves = (color: 'white' | 'black') => {
    const moves: { from: Position, to: Position }[] = [];
    
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = board[row][col];
        if (piece && piece.color === color) {
          const validMoves = getValidMoves({ row, col });
          validMoves.forEach(to => {
            moves.push({ from: { row, col }, to });
          });
        }
      }
    }
    
    return moves;
  };

  const getValidMoves = (position: Position): Position[] => {
    const piece = board[position.row][position.col];
    if (!piece) return [];

    const moves: Position[] = [];
    const { row, col } = position;

    switch (piece.type) {
      case 'pawn':
        const direction = piece.color === 'white' ? -1 : 1;
        const startRow = piece.color === 'white' ? 6 : 1;
        
        // Forward move
        if (row + direction >= 0 && row + direction < 8 && !board[row + direction][col]) {
          moves.push({ row: row + direction, col });
          
          // Double move from start
          if (row === startRow && !board[row + 2 * direction][col]) {
            moves.push({ row: row + 2 * direction, col });
          }
        }
        
        // Captures
        if (col > 0 && board[row + direction] && board[row + direction][col - 1] && 
            board[row + direction][col - 1]?.color !== piece.color) {
          moves.push({ row: row + direction, col: col - 1 });
        }
        if (col < 7 && board[row + direction] && board[row + direction][col + 1] && 
            board[row + direction][col + 1]?.color !== piece.color) {
          moves.push({ row: row + direction, col: col + 1 });
        }
        break;

      case 'rook':
        // Horizontal and vertical moves
        for (let i = 1; i < 8; i++) {
          const positions = [
            { row: row + i, col },
            { row: row - i, col },
            { row, col: col + i },
            { row, col: col - i }
          ];
          
          positions.forEach(pos => {
            if (pos.row >= 0 && pos.row < 8 && pos.col >= 0 && pos.col < 8) {
              const target = board[pos.row][pos.col];
              if (!target) {
                moves.push(pos);
              } else if (target.color !== piece.color) {
                moves.push(pos);
                return; // Stop in this direction
              } else {
                return; // Stop in this direction
              }
            }
          });
        }
        break;

      // Add other piece movement logic here (simplified for demo)
      default:
        // For demo purposes, allow basic moves for other pieces
        const directions = [
          [-1, -1], [-1, 0], [-1, 1],
          [0, -1],           [0, 1],
          [1, -1],  [1, 0],  [1, 1]
        ];
        
        directions.forEach(([dr, dc]) => {
          const newRow = row + dr;
          const newCol = col + dc;
          
          if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
            const target = board[newRow][newCol];
            if (!target || target.color !== piece.color) {
              moves.push({ row: newRow, col: newCol });
            }
          }
        });
    }

    return moves;
  };

  const makeMove = (from: Position, to: Position) => {
    const newBoard = board.map(row => [...row]);
    const piece = newBoard[from.row][from.col];
    const capturedPiece = newBoard[to.row][to.col];

    if (!piece) return;

    // Update captured pieces
    if (capturedPiece) {
      setCapturedPieces(prev => ({
        ...prev,
        [piece.color]: [...prev[piece.color], capturedPiece]
      }));
      
      // Update score
      if (piece.color === 'white') {
        const pieceValues = { pawn: 1, knight: 3, bishop: 3, rook: 5, queen: 9, king: 0 };
        setPlayerScore(prev => prev + pieceValues[capturedPiece.type] * 10);
      }
    }

    // Move piece
    newBoard[to.row][to.col] = { ...piece, position: to, hasMoved: true };
    newBoard[from.row][from.col] = null;

    setBoard(newBoard);
    setSelectedSquare(null);
    
    // Add to move history
    const moveNotation = `${piece.type}${String.fromCharCode(97 + from.col)}${8 - from.row}-${String.fromCharCode(97 + to.col)}${8 - to.row}`;
    setMoveHistory(prev => [...prev, moveNotation]);

    // Switch turns
    const nextPlayer = currentPlayer === 'white' ? 'black' : 'white';
    setCurrentPlayer(nextPlayer);

    // Make computer move after player
    if (nextPlayer === 'black') {
      setTimeout(() => makeComputerMove(), 500);
    }
  };

  const handleSquareClick = (row: number, col: number) => {
    if (currentPlayer !== 'white' || gameStatus !== 'playing') return;

    const piece = board[row][col];
    
    if (selectedSquare) {
      if (selectedSquare.row === row && selectedSquare.col === col) {
        setSelectedSquare(null);
        return;
      }

      const validMoves = getValidMoves(selectedSquare);
      const isValidMove = validMoves.some(move => move.row === row && move.col === col);
      
      if (isValidMove) {
        makeMove(selectedSquare, { row, col });
      } else if (piece && piece.color === 'white') {
        setSelectedSquare({ row, col });
      } else {
        setSelectedSquare(null);
      }
    } else if (piece && piece.color === 'white') {
      setSelectedSquare({ row, col });
    }
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setSelectedSquare(null);
    setCurrentPlayer('white');
    setGameStatus('playing');
    setMoveHistory([]);
    setCapturedPieces({ white: [], black: [] });
    setGameTime(0);
    setPlayerScore(0);
  };

  const getPieceSymbol = (piece: Piece): string => {
    const symbols = {
      white: { king: '♔', queen: '♕', rook: '♖', bishop: '♗', knight: '♘', pawn: '♙' },
      black: { king: '♚', queen: '♛', rook: '♜', bishop: '♝', knight: '♞', pawn: '♟' }
    };
    return symbols[piece.color][piece.type];
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={onBack} className="p-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gradient">Chess Master</h1>
            <p className="text-gray-600">Play against the computer</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span className="font-mono">{formatTime(gameTime)}</span>
            </div>
            <div className="text-sm text-gray-500">Game Time</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center space-x-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className="font-bold">{playerScore}</span>
            </div>
            <div className="text-sm text-gray-500">Score</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chess Board */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-8 gap-0 border-2 border-gray-800 rounded-lg overflow-hidden mx-auto w-fit">
                {board.map((row, rowIndex) => 
                  row.map((piece, colIndex) => {
                    const isBlackSquare = (rowIndex + colIndex) % 2 === 1;
                    const isSelected = selectedSquare?.row === rowIndex && selectedSquare?.col === colIndex;
                    const isValidMove = selectedSquare ? 
                      getValidMoves(selectedSquare).some(move => move.row === rowIndex && move.col === colIndex) : false;
                    
                    return (
                      <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-16 h-16 flex items-center justify-center text-4xl cursor-pointer transition-all duration-200 ${
                          isBlackSquare ? 'bg-amber-800' : 'bg-amber-100'
                        } ${isSelected ? 'ring-4 ring-blue-500' : ''} ${
                          isValidMove ? 'bg-green-300' : ''
                        } hover:brightness-110`}
                        onClick={() => handleSquareClick(rowIndex, colIndex)}
                      >
                        {piece && getPieceSymbol(piece)}
                      </div>
                    );
                  })
                )}
              </div>
              
              {/* Current Turn Indicator */}
              <div className="mt-4 text-center">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                  currentPlayer === 'white' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {currentPlayer === 'white' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  <span className="font-medium">
                    {currentPlayer === 'white' ? "Your Turn" : "Computer's Turn"}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Game Info */}
        <div className="space-y-6">
          {/* Captured Pieces */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg">Captured Pieces</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">You captured:</h4>
                  <div className="flex flex-wrap gap-1">
                    {capturedPieces.white.map((piece, index) => (
                      <span key={index} className="text-2xl">{getPieceSymbol(piece)}</span>
                    ))}
                    {capturedPieces.white.length === 0 && (
                      <span className="text-gray-400 text-sm">No pieces captured</span>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Computer captured:</h4>
                  <div className="flex flex-wrap gap-1">
                    {capturedPieces.black.map((piece, index) => (
                      <span key={index} className="text-2xl">{getPieceSymbol(piece)}</span>
                    ))}
                    {capturedPieces.black.length === 0 && (
                      <span className="text-gray-400 text-sm">No pieces captured</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Move History */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-lg">Move History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="max-h-40 overflow-y-auto space-y-1">
                {moveHistory.map((move, index) => (
                  <div key={index} className="text-sm font-mono">
                    {index + 1}. {move}
                  </div>
                ))}
                {moveHistory.length === 0 && (
                  <span className="text-gray-400 text-sm">No moves yet</span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Game Controls */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-4 space-y-3">
              <Button 
                onClick={resetGame}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700"
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                New Game
              </Button>
              
              {gameStatus !== 'playing' && (
                <Button 
                  onClick={() => onComplete(playerScore)}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Submit Score
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChessGame;
