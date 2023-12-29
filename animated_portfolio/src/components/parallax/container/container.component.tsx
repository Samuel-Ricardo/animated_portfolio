import { IParallaxContainerProps } from "@type/props/parallax/container";

export const ParallaxContainer = ({
  theme,
  children,
  ref,
}: IParallaxContainerProps) => {
  return (
    <section
      id="parallax"
      ref={ref}
      style={{
        background:
          theme === "primary"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {children}
    </section>
  );
};
