"use client";

import { MODULES } from "@/modules/app.factory";
import { useMemo } from "react";

export const usePortfolios = () =>
  useMemo(() => MODULES.PORTFOLIO.MAIN().selectAll(), []);
