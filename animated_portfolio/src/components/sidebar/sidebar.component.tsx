"use client";

import { useState } from "react";
import { SidebarContainer } from "./container/container.component";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return <SidebarContainer open={open}>Hello World!</SidebarContainer>;
};
