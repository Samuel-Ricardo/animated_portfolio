"use client";
import "./parallax.style.scss";

import { IParallaxProps } from "@/@types/props/parallax";
import { ParallaxContainer } from "@/components/parallax/container/container.component";
import { MotionH1 } from "../motion/h1.component";
import { MotionDiv } from "../motion/div.component";
import { useRef } from "react";
import { useParallaxCoordinates } from "@/hooks/parallax/coordinates.hook";
import Image from "next/image";

export const Parallax = ({ theme, title }: IParallaxProps) => {
  const target = useRef(null);
  const { layer1, layer2 } = useParallaxCoordinates({ target });

  return (
    <ParallaxContainer theme={theme} target={target}>
      <MotionH1 style={{ y: layer1 }}>{title}</MotionH1>
      <MotionDiv className="mountains">
        <Image
          src="/mountains.png"
          alt="mountains parallax background"
          fill
          quality={100}
        />
      </MotionDiv>
      <MotionDiv className="planets" style={{ y: layer2 }}>
        <Image
          src={`${theme === "primary" ? "/planets.png" : "/sun.png"}`}
          alt="planets"
          fill
          quality={100}
        />
      </MotionDiv>
      <MotionDiv style={{ x: layer2 }} className="stars">
        <Image src="/stars.png" alt="stars parallax" fill quality={100} />
      </MotionDiv>
    </ParallaxContainer>
  );
};
