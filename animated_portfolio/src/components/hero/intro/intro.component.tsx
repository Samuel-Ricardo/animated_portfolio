import { MotionButton } from "@/components/motion/button.component";
import { MotionDiv } from "@/components/motion/div.component";
import { MotionH1 } from "@/components/motion/h1.component";
import { MotionH2 } from "@/components/motion/h2.component";
import { MODULES } from "@/modules/app.factory";
import Image from "next/image";

export const HeroIntro = () => {
  const animation = MODULES.ANIMATION.MOTION.TEXT.DEFAULT();
  return (
    <div className="intro">
      <MotionDiv
        className="text_container"
        variants={animation}
        initial="initial"
        animate="animate"
      >
        <MotionH2 {...animation}>SAMUEL CABRAL</MotionH2>
        <MotionH1 {...animation}>Full Stack Developer</MotionH1>
        <MotionDiv {...animation} className="button_container">
          <MotionButton variants={animation}>See the latest works</MotionButton>
          <MotionButton variants={animation}>Contact me</MotionButton>
        </MotionDiv>
        <MotionDiv variants={animation} animate="scrollButton">
          <Image src="/scroll.png" alt="scroll down icon" />
        </MotionDiv>
      </MotionDiv>
    </div>
  );
};
