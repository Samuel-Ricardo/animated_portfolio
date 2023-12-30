export interface IParallaxContainerProps extends React.PropsWithChildren {
  theme: "primary" | "secondary";
  target?: React.RefObject<HTMLSelectElement>;
}
