
import React, { useState } from 'react';
import { RefreshCw, Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface ColorPaletteModalProps {
  onClose: () => void;
}

const ColorPaletteModal: React.FC<ColorPaletteModalProps> = ({ onClose }) => {
  const [colors, setColors] = useState<string[]>([]);
  const [paletteType, setPaletteType] = useState('random');

  const generatePalette = () => {
    const newColors = [];
    for (let i = 0; i < 5; i++) {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 50) + 50;
      const lightness = Math.floor(Math.random() * 40) + 30;
      newColors.push(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
    }
    setColors(newColors);
    toast({
      title: "Success!",
      description: "New color palette generated."
    });
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    toast({
      title: "Copied!",
      description: `Color ${color} copied to clipboard.`
    });
  };

  const exportPalette = () => {
    const paletteData = colors.join('\n');
    navigator.clipboard.writeText(paletteData);
    toast({
      title: "Exported!",
      description: "Palette copied to clipboard."
    });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Palette Type</label>
          <select 
            value={paletteType} 
            onChange={(e) => setPaletteType(e.target.value)}
            className="w-full px-3 py-2 border border-input rounded-md bg-background"
          >
            <option value="random">Random</option>
            <option value="monochromatic">Monochromatic</option>
            <option value="complementary">Complementary</option>
            <option value="triadic">Triadic</option>
          </select>
        </div>

        <Button onClick={generatePalette} className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate Palette
        </Button>
      </div>

      {colors.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Generated Palette</h3>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color, index) => (
              <div key={index} className="space-y-2">
                <div
                  className="w-full h-20 rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  style={{ backgroundColor: color }}
                  onClick={() => copyColor(color)}
                />
                <p className="text-xs text-center font-mono">{color}</p>
              </div>
            ))}
          </div>
          <Button onClick={exportPalette} variant="outline" className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Export Palette
          </Button>
        </div>
      )}
    </div>
  );
};

export default ColorPaletteModal;
