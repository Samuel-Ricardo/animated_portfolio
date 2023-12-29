"use client";

import { useEffect, useState } from "react";
import { Circle } from "./circle/circle.component";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) =>
      setPosition({ x: event.x, y: event.x });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <Circle position={position} />;
};
