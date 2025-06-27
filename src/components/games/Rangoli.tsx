import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Circle, Minus, Download, Trash2, Flower2, Eraser, Palette } from "lucide-react";

export type Tool = "dot" | "line" | "circle" | "petal" | "erase";
export type SymmetryMode = "none" | "horizontal" | "vertical" | "radial4" | "radial8";

interface PatternTemplate {
  id: string;
  name: string;
  description: string;
  emoji: string;
  generate: (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => void;
}

// Pattern generation functions
const generateLotusPattern = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  
  // Center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
  ctx.fill();
  
  // Petals around center
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const x = centerX + Math.cos(angle) * 60;
    const y = centerY + Math.sin(angle) * 60;
    
    ctx.beginPath();
    ctx.ellipse(x, y, 25, 15, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Outer petals
  for (let i = 0; i < 16; i++) {
    const angle = (i * Math.PI * 2) / 16;
    const x = centerX + Math.cos(angle) * 100;
    const y = centerY + Math.sin(angle) * 100;
    
    ctx.beginPath();
    ctx.ellipse(x, y, 20, 10, angle, 0, Math.PI * 2);
    ctx.fill();
  }
};

const generatePeacockPattern = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  
  // Body
  ctx.beginPath();
  ctx.ellipse(centerX, centerY + 50, 15, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Neck
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, 8, 30, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Head
  ctx.beginPath();
  ctx.arc(centerX, centerY - 25, 12, 0, Math.PI * 2);
  ctx.fill();
  
  // Tail feathers
  for (let i = 0; i < 5; i++) {
    const angle = (i - 2) * 0.3;
    const length = 80 + i * 10;
    const x = centerX + Math.sin(angle) * 30;
    const y = centerY + 50;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.sin(angle) * length, y + Math.cos(angle) * length);
    ctx.stroke();
    
    // Feather tip
    const tipX = x + Math.sin(angle) * length;
    const tipY = y + Math.cos(angle) * length;
    ctx.beginPath();
    ctx.arc(tipX, tipY, 8, 0, Math.PI * 2);
    ctx.fill();
  }
};

const generateDiyaPattern = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  
  // Central diya
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, 40, 20, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Flame
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 20);
  ctx.bezierCurveTo(centerX - 10, centerY - 35, centerX + 10, centerY - 35, centerX, centerY - 20);
  ctx.fill();
  
  // Surrounding diyas
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const x = centerX + Math.cos(angle) * 80;
    const y = centerY + Math.sin(angle) * 80;
    
    ctx.beginPath();
    ctx.ellipse(x, y, 20, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Small flame
    ctx.beginPath();
    ctx.moveTo(x, y - 10);
    ctx.bezierCurveTo(x - 5, y - 20, x + 5, y - 20, x, y - 10);
    ctx.fill();
  }
};

const generateMandalaPattern = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 2;
  
  // Center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
  ctx.fill();
  
  // Concentric circles
  for (let radius = 30; radius <= 120; radius += 30) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Decorative elements
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};

const generateFlowerPattern = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.fillStyle = color;
  
  // Center
  ctx.beginPath();
  ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
  ctx.fill();
  
  // Petals
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const x = centerX + Math.cos(angle) * 40;
    const y = centerY + Math.sin(angle) * 40;
    
    ctx.beginPath();
    ctx.ellipse(x, y, 25, 15, angle, 0, Math.PI * 2);
    ctx.fill();
  }
};

const generateGeometricPattern = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, color: string) => {
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 3;
  
  // Central diamond
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 40);
  ctx.lineTo(centerX + 40, centerY);
  ctx.lineTo(centerX, centerY + 40);
  ctx.lineTo(centerX - 40, centerY);
  ctx.closePath();
  ctx.fill();
  
  // Surrounding triangles
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const distance = 70;
    const x = centerX + Math.cos(angle) * distance;
    const y = centerY + Math.sin(angle) * distance;
    
    ctx.beginPath();
    ctx.moveTo(x, y - 15);
    ctx.lineTo(x + 15, y + 15);
    ctx.lineTo(x - 15, y + 15);
    ctx.closePath();
    ctx.fill();
  }
};

const patternTemplates: PatternTemplate[] = [
  {
    id: "lotus",
    name: "Lotus",
    description: "Classic lotus flower design",
    emoji: "🪷",
    generate: generateLotusPattern,
  },
  {
    id: "peacock",
    name: "Peacock",
    description: "Traditional peacock motif",
    emoji: "🦚",
    generate: generatePeacockPattern,
  },
  {
    id: "diya",
    name: "Diya",
    description: "Oil lamp pattern",
    emoji: "🪔",
    generate: generateDiyaPattern,
  },
  {
    id: "mandala",
    name: "Mandala",
    description: "Circular geometric design",
    emoji: "🌸",
    generate: generateMandalaPattern,
  },
  {
    id: "flower",
    name: "Flower",
    description: "Simple flower pattern",
    emoji: "🌺",
    generate: generateFlowerPattern,
  },
  {
    id: "geometric",
    name: "Geometric",
    description: "Angular geometric shapes",
    emoji: "🔶",
    generate: generateGeometricPattern,
  },
];
interface RangoliProps {
  onBack?: () => void;
}

const Rangoli = ({ onBack }: RangoliProps) => {
  const [activeTool, setActiveTool] = useState<Tool>("dot");
  const [activeColor, setActiveColor] = useState("#FF6B35");
  const [brushSize, setBrushSize] = useState(8);
  const [symmetryMode, setSymmetryMode] = useState<SymmetryMode>("none");
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  
  // Canvas drawing state
  const canvasElementRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (canvasElementRef.current) {
      setCanvasRef(canvasElementRef.current);
      initializeCanvas();
    }
  }, []);

  const initializeCanvas = () => {
    const canvas = canvasElementRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Draw grid background
    ctx.strokeStyle = "#f0f0f0";
    ctx.lineWidth = 1;
    const gridSize = 20;
    
    for (let x = 0; x <= canvas.width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    
    for (let y = 0; y <= canvas.height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Add center guides for symmetry
    ctx.strokeStyle = "#e0e0e0";
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    
    // Center lines
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
    
    ctx.setLineDash([]);
  };

  const clearCanvas = () => {
    if (canvasRef) {
      const ctx = canvasRef.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        
        // Redraw grid background
        ctx.strokeStyle = "#f0f0f0";
        ctx.lineWidth = 1;
        const gridSize = 20;
        
        for (let x = 0; x <= canvasRef.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvasRef.height);
          ctx.stroke();
        }
        
        for (let y = 0; y <= canvasRef.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvasRef.width, y);
          ctx.stroke();
        }

        // Add center guides for symmetry
        ctx.strokeStyle = "#e0e0e0";
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        
        // Center lines
        ctx.beginPath();
        ctx.moveTo(canvasRef.width / 2, 0);
        ctx.lineTo(canvasRef.width / 2, canvasRef.height);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, canvasRef.height / 2);
        ctx.lineTo(canvasRef.width, canvasRef.height / 2);
        ctx.stroke();
        
        ctx.setLineDash([]);
      }
    }
  };

  const saveCanvas = () => {
    if (canvasRef) {
      const link = document.createElement("a");
      link.download = "my-rangoli.png";
      link.href = canvasRef.toDataURL();
      link.click();
    }
  };

  const handlePatternSelect = (templateId: string, color: string) => {
    if (canvasRef) {
      const ctx = canvasRef.getContext("2d");
      if (ctx) {
        const template = patternTemplates.find(t => t.id === templateId);
        if (template) {
          template.generate(ctx, canvasRef, color);
        }
      }
    }
  };

  // Canvas drawing functions
  const getCanvasPos = (e: React.MouseEvent) => {
    const canvas = canvasElementRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const erase = (x: number, y: number) => {
    const canvas = canvasElementRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
  };

  const drawDot = (x: number, y: number) => {
    const canvas = canvasElementRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = activeColor;
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fill();
  };

  const drawCircle = (x: number, y: number) => {
    const canvas = canvasElementRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = activeColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, brushSize * 2, 0, Math.PI * 2);
    ctx.stroke();
  };

  const drawPetal = (x: number, y: number) => {
    const canvas = canvasElementRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = activeColor;
    ctx.beginPath();
    
    // Create petal shape using bezier curves
    const size = brushSize * 1.5;
    ctx.moveTo(x, y - size);
    ctx.bezierCurveTo(x + size, y - size, x + size, y + size, x, y + size);
    ctx.bezierCurveTo(x - size, y + size, x - size, y - size, x, y - size);
    ctx.fill();
  };

  const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
    const canvas = canvasElementRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = activeColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  const applySymmetry = (x: number, y: number, drawFn: (px: number, py: number) => void) => {
    const canvas = canvasElementRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Always draw at the original position
    drawFn(x, y);

    switch (symmetryMode) {
      case "horizontal":
        drawFn(canvas.width - x, y);
        break;
      case "vertical":
        drawFn(x, canvas.height - y);
        break;
      case "radial4":
        drawFn(canvas.width - x, y);
        drawFn(x, canvas.height - y);
        drawFn(canvas.width - x, canvas.height - y);
        break;
      case "radial8":
        const angles = [0, 45, 90, 135, 180, 225, 270, 315];
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const originalAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        angles.forEach(angle => {
          const radians = (originalAngle + angle) * (Math.PI / 180);
          const newX = centerX + distance * Math.cos(radians);
          const newY = centerY + distance * Math.sin(radians);
          if (newX >= 0 && newX <= canvas.width && newY >= 0 && newY <= canvas.height) {
            drawFn(newX, newY);
          }
        });
        break;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const pos = getCanvasPos(e);
    setIsDrawing(true);
    setLastPos(pos);

    if (activeTool === "erase") {
      erase(pos.x, pos.y);
    } else if (activeTool === "dot") {
      applySymmetry(pos.x, pos.y, drawDot);
    } else if (activeTool === "circle") {
      applySymmetry(pos.x, pos.y, drawCircle);
    } else if (activeTool === "petal") {
      applySymmetry(pos.x, pos.y, drawPetal);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing) return;

    const pos = getCanvasPos(e);

    if (activeTool === "erase") {
      erase(pos.x, pos.y);
    } else if (activeTool === "line") {
      applySymmetry(lastPos.x, lastPos.y, (x1, y1) => {
        drawLine(x1, y1, pos.x, pos.y);
      });
    } else if (activeTool === "dot") {
      applySymmetry(pos.x, pos.y, drawDot);
    }

    setLastPos(pos);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  // Rangoli colors
  const rangoliColors = [
    "#FF6B35", "#F7931E", "#FFD23F", "#E91E63", "#9C27B0", "#673AB7",
    "#3F51B5", "#2196F3", "#00BCD4", "#009688", "#4CAF50", "#8BC34A",
    "#CDDC39", "#FFC107", "#FF9800", "#FF5722", "#795548", "#607D8B",
    "#000000", "#FFFFFF",
  ];

  // Drawing tools
  const tools = [
    { id: "dot" as Tool, label: "Dot", icon: Circle },
    { id: "line" as Tool, label: "Line", icon: Minus },
    { id: "circle" as Tool, label: "Circle", icon: Circle },
    { id: "petal" as Tool, label: "Petal", icon: Flower2 },
    { id: "erase" as Tool, label: "Erase", icon: Eraser },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tools Panel */}
        <div className="lg:col-span-1 space-y-4">
          {/* Drawing Tools */}
          <Card className="p-4 bg-white/80 backdrop-blur-sm border-orange-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Drawing Tools</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {tools.map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={activeTool === id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTool(id)}
                    className={`h-12 flex flex-col gap-1 ${
                      activeTool === id
                        ? id === "erase" 
                          ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                          : "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                        : "hover:bg-orange-50"
                    }`}
                  >
                    <Icon size={16} />
                    <span className="text-xs">{label}</span>
                  </Button>
                ))}
              </div>

              <Separator />

              {/* Brush Size */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  {activeTool === "erase" ? "Eraser" : "Brush"} Size: {brushSize}px
                </label>
                <Slider
                  value={[brushSize]}
                  onValueChange={(value) => setBrushSize(value[0])}
                  max={30}
                  min={2}
                  step={2}
                  className="w-full"
                />
              </div>

              <Separator />

              {/* Symmetry Mode */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Symmetry</label>
                <Select value={symmetryMode} onValueChange={(value: SymmetryMode) => setSymmetryMode(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="horizontal">Horizontal</SelectItem>
                    <SelectItem value="vertical">Vertical</SelectItem>
                    <SelectItem value="radial4">4-Way Radial</SelectItem>
                    <SelectItem value="radial8">8-Way Radial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              {/* Actions */}
              <div className="space-y-2">
                <Button
                  onClick={saveCanvas}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Save Rangoli
                </Button>
                <Button
                  onClick={clearCanvas}
                  variant="outline"
                  className="w-full hover:bg-red-50 hover:border-red-200"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Clear Canvas
                </Button>
              </div>
            </div>
          </Card>

          {/* Colors */}
          <Card className="p-4 bg-white/80 backdrop-blur-sm border-pink-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Colors</h3>
            <div className="grid grid-cols-4 gap-2">
              {rangoliColors.map((color) => (
                <Button
                  key={color}
                  className={`w-12 h-12 rounded-full border-2 hover:scale-110 transition-transform ${
                    activeColor === color
                      ? "border-gray-800 shadow-lg scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setActiveColor(color)}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </Card>

          {/* Pattern Templates */}
          <Card className="p-4 bg-white/80 backdrop-blur-sm border-purple-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Pattern Templates</h3>
            <div className="space-y-2">
              {patternTemplates.map((pattern) => (
                <Card
                  key={pattern.id}
                  className="p-3 cursor-pointer hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-200 border-l-4 border-l-transparent hover:border-l-orange-400"
                  onClick={() => handlePatternSelect(pattern.id, activeColor)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{pattern.emoji}</span>
                      <div>
                        <h4 className="font-medium text-sm text-gray-800">{pattern.name}</h4>
                        <p className="text-xs text-gray-600">{pattern.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-gray-300"
                        style={{ backgroundColor: activeColor }}
                      />
                      <Palette size={14} className="text-gray-500" />
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="mt-4 p-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-lg">
                <p className="text-xs text-gray-700 text-center">
                  💡 <strong>Tip:</strong> Patterns will be drawn in your selected color! Use symmetry modes for authentic rangoli patterns.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Canvas */}
        <div className="lg:col-span-3">
          <Card className="p-4 bg-white/90 backdrop-blur-sm border-2 border-gradient-to-r from-orange-200 to-purple-200">
            <div className="flex justify-center">
              <canvas
                ref={canvasElementRef}
                className={`border-2 border-gray-200 rounded-lg shadow-lg ${
                  activeTool === "erase" ? "cursor-pointer" : "cursor-crosshair"
                } bg-white`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              />
            </div>
          </Card>
        </div>
      </div>
      <Button onClick={onBack} variant="outline">
              Back to Games
            </Button>
          
    </div>

  );
};

export default Rangoli;
