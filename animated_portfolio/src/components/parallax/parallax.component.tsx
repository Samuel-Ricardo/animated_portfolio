"use client";

import { IParallaxProps } from "@/@types/props/parallax";
import { ParallaxContainer } from "@/components/parallax/container/container.component";
import { MotionH1 } from "../motion/h1.component";
import { MotionDiv } from "../motion/div.component";
import { useRef } from "react";
import { useParallaxCoordinates } from "@/hooks/parallax/coordinates.hook";

export const Parallax = ({ theme, title }: IParallaxProps) => {
  const target = useRef(null);
  const { layer1, layer2 } = useParallaxCoordinates({ target });

  return (
    <ParallaxContainer theme={theme} target={target}>
      <MotionH1 style={{ y: layer1 }}>{title}</MotionH1>
      <MotionDiv className="mountains" />
      <MotionDiv
        className="planets"
        style={{
          y: layer2,
          backgroundImage: `url(${
            theme === "primary" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <MotionDiv style={{ x: layer2 }} className="stars" />
    </ParallaxContainer>
  );
};
