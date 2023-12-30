import "./footnote.style.scss";

import { MotionDiv } from "@/components/motion/div.component";
import { MODULES } from "@/modules/app.factory";

export const Footnote = () => (
  <MotionDiv className="footnote" {...MODULES.ANIMATION.MOTION.SLIDE.IN()}>
    <p>
      I focus on helping your brand grow <br /> and move forward
    </p>
  </MotionDiv>
);
