export interface IParallaxContainerProps extends React.PropsWithChildren {
  theme: "primary" | "secondary";
  ref?: React.RefObject<HTMLSelectElement>;
}
