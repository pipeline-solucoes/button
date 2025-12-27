import "@mui/material/styles";
import type { ButtonKind } from "../types/ButtonKind";

export interface PipeSolButtonTokens {
  background: string;
  backgroundHover: string;
  color: string;
  colorHover: string;
  borderRadius: string;
  boxShadow?: string;
  padding: string;
}

declare module "@mui/material/styles" {
  interface Theme {
    pipesol?: {
      buttons?: Partial<Record<ButtonKind, PipeSolButtonTokens>>;
    };
  }

  interface ThemeOptions {
    pipesol?: {
      buttons?: Partial<Record<ButtonKind, PipeSolButtonTokens>>;
    };
  }
}