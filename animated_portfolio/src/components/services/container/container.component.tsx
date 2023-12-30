import "./container.style.scss";

import { PropsWithChildren } from "react";
import { MODULES } from "@/modules/app.factory";
import { MotionSection } from "@/components/motion/section.component";

export const ServicesContainer = ({ children }: PropsWithChildren) => {
  const animation = MODULES.ANIMATION.MOTION.SLIDE.IN();
  return (
    <MotionSection className="overview" {...animation}>
      {children}
    </MotionSection>
  );
};
