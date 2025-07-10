
import React, { useState } from 'react';
import { RefreshCw, Copy, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface PasswordGeneratorModalProps {
  onClose: () => void;
}

const PasswordGeneratorModal: React.FC<PasswordGeneratorModalProps> = ({ onClose }) => {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (!charset) {
      toast({
        title: "Error",
        description: "Please select at least one character type.",
        variant: "destructive"
      });
      return;
    }

    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Copied!",
      description: "Password copied to clipboard."
    });
  };

  const getStrength = () => {
    if (password.length < 8) return { level: 'Weak', color: 'destructive' };
    if (password.length < 12) return { level: 'Medium', color: 'secondary' };
    return { level: 'Strong', color: 'default' };
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="50"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Include Uppercase (A-Z)</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Include Lowercase (a-z)</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Include Numbers (0-9)</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="rounded"
            />
            <span className="text-sm">Include Symbols (!@#$%)</span>
          </label>
        </div>

        <Button onClick={generatePassword} className="w-full">
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate Password
        </Button>
      </div>

      {password && (
        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg bg-muted/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Generated Password</span>
              <Badge variant={getStrength().color as any}>
                <Shield className="h-3 w-3 mr-1" />
                {getStrength().level}
              </Badge>
            </div>
            <div className="font-mono text-lg break-all mb-3">{password}</div>
            <Button onClick={copyPassword} variant="outline" className="w-full">
              <Copy className="h-4 w-4 mr-2" />
              Copy Password
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PasswordGeneratorModal;
