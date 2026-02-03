import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { useState } from 'react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TerminalModal({ isOpen, onClose }: TerminalModalProps) {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              width: isMaximized ? '100%' : '90%',
              height: isMaximized ? '100%' : '80%',
              maxWidth: isMaximized ? '100%' : '1000px',
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-mdn-black rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 font-mono text-sm font-medium">jor1k - OpenRISC Emulator</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  {isMaximized ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 bg-black relative">
              <iframe 
                src="https://s-macke.github.io/jor1k/demos/alpine.html" 
                className="w-full h-full border-none"
                title="jor1k Terminal"
                allow="clipboard-read; clipboard-write"
              />
              
              {/* Overlay hint for first time */}
              <div className="absolute bottom-4 right-4 bg-gray-900/80 text-gray-400 text-xs py-1 px-3 rounded-full pointer-events-none backdrop-blur-sm border border-gray-700">
                Click inside the terminal to start typing
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
