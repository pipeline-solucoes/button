import "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface ButtonOptions {
    background: string;
    backgroundHover: string;
    color: string;
    colorHover: string;
    borderRadius: string;
    boxShadow?: string;
    padding: string;
  }

  interface Palette {
    custom?: {
      primaryButton: ButtonOptions;
      secondaryButton: ButtonOptions;
      tertiaryButton?: ButtonOptions;
      deleteButton?: ButtonOptions;
    };
  }

  interface PaletteOptions {
    custom?: {
      primaryButton: ButtonOptions;
      secondaryButton: ButtonOptions;
      tertiaryButton?: ButtonOptions;
      deleteButton?: ButtonOptions;
    };
  }
}
