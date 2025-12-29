import type { ThemeOptions } from "@mui/material/styles";
import type { ButtonKind, PipelineSolucoesButtonTokens } from "@pipelinesolucoes/theme";

// (Opcional) tipar o objeto pra garantir que todos os tokens estão corretos
const buttons: Partial<Record<ButtonKind, PipelineSolucoesButtonTokens>> = {
  primary: {
    background: "#216fed",
    backgroundHover: "#005ce3",
    color: "#fff",
    colorHover: "#fff",
    borderRadius: "9999px",
    padding: "8px 24px",
  },
  secondary: {
    background: "#fff",
    backgroundHover: "#fff",
    color: "#216fed",
    colorHover: "#005ce3",
    borderRadius: "9999px",
    padding: "8px 24px",
  },
  delete: {
    background: "#F44336",
    backgroundHover: "#D32F2F",
    color: "#fff",
    colorHover: "#fff",
    borderRadius: "9999px",
    padding: "8px 24px",
  },
};

export const buttonsThemeOptions: ThemeOptions = {
  pipelinesolucoes: {
    buttons,
  },
};
