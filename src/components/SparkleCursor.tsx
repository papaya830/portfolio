import { useEffect, useRef, useState, type CSSProperties } from 'react';
import './SparkleCursor.css';

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
};

const COLORS = ['#ffb3c6', '#d81b60', '#FECC64', '#E6B2C8', '#B5D8FF'];
const SPAWN_INTERVAL_MS = 45;
const MAX_SPARKLES = 24;

let nextSparkleId = 0;

const SparkleCursor = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn.current < SPAWN_INTERVAL_MS) return;
      lastSpawn.current = now;

      const sparkle: Sparkle = {
        id: nextSparkleId++,
        x: e.clientX + (Math.random() * 16 - 8),
        y: e.clientY + (Math.random() * 16 - 8),
        size: 4 + Math.random() * 5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
      };

      setSparkles(prev => [...prev.slice(-(MAX_SPARKLES - 1)), sparkle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const removeSparkle = (id: number) => {
    setSparkles(prev => prev.filter(s => s.id !== id));
  };

  return (
    <div className="sparkle-cursor-layer" aria-hidden="true">
      {sparkles.map(s => (
        <span
          key={s.id}
          className="sparkle"
          onAnimationEnd={() => removeSparkle(s.id)}
          style={{
            left: s.x,
            top: s.y,
            fontSize: s.size,
            color: s.color,
            '--sparkle-rot': `${s.rotation}deg`,
          } as CSSProperties}
        >
          ✦
        </span>
      ))}
    </div>
  );
};

export default SparkleCursor;
