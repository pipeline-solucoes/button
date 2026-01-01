import { TypographyVariant } from "@mui/material/styles";
import { BorderProps, ColorProps, LayoutProps } from "@pipelinesolucoes/theme";


export interface CommonStyleProps
  extends LayoutProps,
    ColorProps,
    BorderProps {
  
    colorText?: string; 
    variant?: TypographyVariant; 
  }
