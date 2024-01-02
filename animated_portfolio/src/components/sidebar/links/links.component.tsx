import { MotionDiv } from "@/components/motion/div.component";
import { MODULES } from "@/modules/app.factory";
import Link from "next/link";

export const SidebarLinks = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  const EMERGE = MODULES.ANIMATION.MOTION.EMERGE();
  const OPEN = MODULES.ANIMATION.MOTION.OPEN.FILL();

  return (
    <MotionDiv className="link_list" variants={OPEN}>
      <MotionDiv className="links" variants={EMERGE.PARENT}>
        {items.map((item, index) => (
          <MotionDiv
            key={index}
            variants={EMERGE.CHILD}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`#${item}`}>{item}</Link>
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionDiv>
  );
};
