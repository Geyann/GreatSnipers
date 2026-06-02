import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none', // Essential: allows clicking elements behind the cursor
        zIndex: 9999,
        // Centers the 32x32 image on the mouse tip
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    >
      <img 
        src="/crosshair.png" 
        alt="custom-cursor" 
        style={{ width: '40px', height: '40px' }} 
      />
    </div>
  );
};

export default CustomCursor;