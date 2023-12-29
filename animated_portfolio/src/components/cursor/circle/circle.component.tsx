import { ICursorCircleProps } from "@/@types/props/cursor/circle";
import { MotionDiv } from "@/components/motion/div.component";

export const Circle = ({ position }: ICursorCircleProps) => (
  <MotionDiv className="circle" animate={{ ...position }} />
);
