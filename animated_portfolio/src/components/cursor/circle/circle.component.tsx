import "./circle.style.scss";

import { ICursorCircleProps } from "@/@types/props/cursor/circle";
import { MotionDiv } from "@/components/motion/div.component";

export const Circle = ({ position }: ICursorCircleProps) => (
  <MotionDiv
    className="circle"
    animate={{
      x: position.x - 14,
      y: position.y - 110,
    }}
  />
);
