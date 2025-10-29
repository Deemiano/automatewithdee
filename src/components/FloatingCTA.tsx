import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, GripVertical } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showGuide, setShowGuide] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);

  // Show CTA after scrolling past "About" section
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        const aboutBottom = aboutSection.getBoundingClientRect().bottom;
        setIsVisible(aboutBottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize position at bottom-right
  useEffect(() => {
    const updatePosition = () => {
      if (elementRef.current && position.x === 0 && position.y === 0) {
        const rect = elementRef.current.getBoundingClientRect();
        setPosition({
          x: window.innerWidth - rect.width - 32,
          y: window.innerHeight - rect.height - 32,
        });
      }
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position.x, position.y]);

  // Drag logic
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const newX = Math.max(0, Math.min(e.clientX - dragStart.x, window.innerWidth - rect.width));
      const newY = Math.max(0, Math.min(e.clientY - dragStart.y, window.innerHeight - rect.height));
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragStart]);

  // Auto-hide guide after 6 seconds (initially)
  useEffect(() => {
    if (showGuide) {
      const timer = setTimeout(() => setShowGuide(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [showGuide]);

  if (!isVisible) return null;

  return (
    <div
      ref={elementRef}
      className="fixed z-50 animate-fade-in"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseEnter={() => setShowGuide(true)}
      onMouseLeave={() => setShowGuide(false)}
    >
      <div className="relative bg-primary text-primary-foreground rounded-2xl shadow-strong p-6 max-w-sm">
        {/* Header: draggable area */}
        <div
          className="flex items-center gap-3 mb-3 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          <div className="p-2 bg-accent rounded-lg">
            <Calendar className="text-accent-foreground" size={24} />
          </div>
          <h3 className="text-lg font-bold flex-1">Book a Free Discovery Call</h3>
          <GripVertical className="text-primary-foreground/50" size={20} />
        </div>

        <p className="text-sm text-primary-foreground/90 mb-2">
          Let's discuss how I can help streamline your operations and save you valuable time.
        </p>
        <p className="text-sm text-primary-foreground/90 mb-4">
          Book a free 20–30 minute discovery call now.
        </p>
        <p className="text-xs text-primary-foreground/70 mb-4">
          Response time: Within 24 hours on business days
        </p>

        <Button
          variant="accent"
          className="w-full"
          onClick={() => window.open("https://calendly.com/dennismuchirim", "_blank")}
        >
          Schedule Now
        </Button>

        {/* Hover/Intro Tooltip */}
        {showGuide && (
          <div className="absolute -top-6 right-0 bg-teal-500 text-white text-xs px-3 py-1 rounded-full shadow-md animate-fade-in transition-opacity duration-500">
            💡 Grab the drag handle (top-right) to move around
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingCTA;
