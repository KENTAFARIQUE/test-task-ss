// context/BlobContext.jsx
import { createContext, useContext, useMemo } from 'react';

const BackgroundContext = createContext();

export const useBlobs = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBlobs must be used within BlobProvider');
  }
  return context;
};

export const BackProvider = ({ children, page }) => {
  const getBlobConfig = (page) => {
    const configs = {
      home: {
        blobs: [
          { className: 'blob-1', height: '90%', width: '80%', background: 'linear-gradient(45deg, #508e38, #e7b900)', left: '30%', top: '-10%', delay: 0 },
          { className: 'blob-3', height: '65%', width: '80%', background: 'linear-gradient(-45deg, #5bffc0, #0064f1)', bottom: '-20%', right: '10%', delay: 1 },
          { className: 'blob-4', height: '80%', width: '60%', background: '#000000', left: '-10%', top: '10%', delay: 1.2 }
        ],
        animation: 'home 8s infinite alternate'
      },
      
      leagues: {
        blobs: [
          { className: 'blob-1', height: '90%', width: '80%', background: 'linear-gradient(45deg, #ffffff, #00e5ff)', left: '-20%', top: '-10%', delay: '0' },
          { className: 'blob-3', height: '65%', width: '80%', background: 'linear-gradient(45deg, #00bbff, #000261)', bottom: '-20%', right: '-10%', delay: '1' },
          { className: 'blob-4', height: '50%', width: '75%', background: '#000000', left: '-29%', top: '-10%', delay: '1.2' }
        ],
        animation: 'leagues 10s infinite alternate'
      },
      
      teams: {
        blobs: [
          { className: 'blob-1', height: '85%', width: '30%', background: 'linear-gradient(45deg, #ff9a17, #ffdd00)', left: '50%', top: '-10%', delay: 0 },
          { className: 'blob-3', height: '60%', width: '70%', background: 'linear-gradient(180deg, #ff6f00, #3e0000)', bottom: '-10%',  right: '0%', delay: 2 },
          { className: 'blob-4', height: '90%', width: '60%', background: '#000000', left: '0%', top: '-10%', delay: 1.2 }
        ],
        animation: 'team 9s infinite alternate'
      },
      
      calendar: {
        blobs: [
          { className: 'blob-1', height: '70%', width: '65%', background: 'linear-gradient(45deg, #00fffb, #00447c)', left: '70%', top: '30%', delay: 0 },
          { className: 'blob-3', height: '80%', width: '85%', background: 'linear-gradient(180deg, #ff3535, #6e2f4b)', right: '60%', bottom: '-10%', delay: 1.8 },
          { className: 'blob-4', height: '100%', width: '60%', background: '#000000', left: '30%', top: '00%', delay: 0.5 }
        ],
        animation: 'calendar 12s infinite alternate'
      }
    };

    return configs[page] || configs.home;
  };

  const config = useMemo(() => getBlobConfig(page), [page]);

  return (
    <BackgroundContext.Provider value={config}>
      {children}
    </BackgroundContext.Provider>
  );
};