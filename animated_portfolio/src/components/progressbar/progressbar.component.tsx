import { MotionDiv } from "@/components/motion/div.component";

export const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="progress">
    <h1>Featured Works</h1>
    <MotionDiv style={{ scaleX: progress }} className="bar" />
  </div>
);
