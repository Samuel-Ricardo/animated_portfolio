"use client";

import { useState } from "react";
import { SidebarContainer } from "./container/container.component";
import { SidebarLinks } from "./links/links.component";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContainer open={open}>
      <SidebarLinks />
    </SidebarContainer>
  );
};
