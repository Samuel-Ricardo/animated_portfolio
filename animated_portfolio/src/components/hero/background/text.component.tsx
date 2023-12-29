import "./text.style.scss";

import { MotionDiv } from "@/components/motion/div.component";
import { MODULES } from "@/modules/app.factory";

export const HeroBackground = () => {
  const animation = MODULES.ANIMATION.MOTION.SLIDER();

  return (
    <MotionDiv className="background_text" {...animation}>
      Writer Content Creator Influencer
    </MotionDiv>
  );
};
