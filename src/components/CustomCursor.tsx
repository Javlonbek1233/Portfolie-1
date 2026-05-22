import { useEffect, useState, useRef } from 'react';

export default function CustomCursor({ isDarkMode }: { isDarkMode: boolean }) {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Smooth follow positioning refs
  const currentPos = useRef({ x: -100, y: -100 });
  const targetPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device is mobile
    const checkDevice = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track dynamic hovered elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') !== null;
      
      setLinkHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    // Frame interpolation for lagging spring effect
    let animId: number;
    const updatePosition = () => {
      // Linear interpolation: current = current + (target - current) * factor
      const speedFactor = 0.15; // smooth delay
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * speedFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * speedFactor;

      setPosition({ x: currentPos.current.x, y: currentPos.current.y });
      animId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Ring */}
      <div
        id="cursor-outer"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
        }}
        className={`fixed pointer-events-none z-50 w-8 h-8 rounded-full border transition-all duration-150 ease-out ${
          isDarkMode
            ? linkHovered
              ? 'bg-cyan-400/10 border-cyan-400 mix-blend-screen'
              : 'border-violet-500/80 bg-transparent'
            : linkHovered
              ? 'bg-indigo-500/10 border-indigo-500'
              : 'border-indigo-600/70 bg-transparent'
        }`}
      />
      
      {/* Inner Dot */}
      <div
        id="cursor-inner"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : linkHovered ? 0.5 : 1})`,
        }}
        className={`fixed pointer-events-none z-50 w-2 h-2 rounded-full transition-all duration-75 ${
          isDarkMode
            ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'
            : 'bg-indigo-600 shadow-[0_0_6px_rgba(79,70,229,0.5)]'
        }`}
      />
    </>
  );
}
