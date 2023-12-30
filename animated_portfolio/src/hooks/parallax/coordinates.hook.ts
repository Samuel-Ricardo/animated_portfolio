import { IParallaxCoordinatesProps } from "@type/hook/parallax/coordinates";
import { useScroll, useTransform } from "framer-motion";

export const useParallaxCoordinates = ({
  target,
}: IParallaxCoordinatesProps) => {
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start start", "end start"],
  });

  const layer1 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const layer2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return { layer1, layer2 };
};
