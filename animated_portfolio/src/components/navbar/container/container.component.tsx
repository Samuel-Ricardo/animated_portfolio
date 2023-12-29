import "./container.style.scss";

import { PropsWithChildren } from "react";

export const NavbarContainer = ({ children }: PropsWithChildren) => (
  <nav className="navbar">
    <div className="wrapper">{children}</div>
  </nav>
);
