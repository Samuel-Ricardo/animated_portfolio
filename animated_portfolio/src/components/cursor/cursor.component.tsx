"use client";
import { useMousePosition } from "@/hooks/cursor.hook";
import { Circle } from "./circle/circle.component";

export const Cursor = () => <Circle position={useMousePosition()} />;
