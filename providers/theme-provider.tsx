"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import type { BaseComponent } from "@/types";

export const ThemeProvider: BaseComponent<ThemeProviderProps> = ({ children, ...props }) => (
  <NextThemesProvider enableColorScheme enableSystem attribute="class" {...props}>
    {children}
  </NextThemesProvider>
);
