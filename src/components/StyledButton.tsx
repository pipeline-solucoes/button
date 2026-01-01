
import { ButtonKind, ColorProps, LayoutProps, PipelineSolucoesButtonTokens } from '@pipelinesolucoes/theme';
import { COMMON_STYLE_FORWARD_PROPS } from '../types/CommonForwardProps';
import { CommonStyleProps } from "../types/style/CommonStyleProps";
import { Button, styled, TypographyVariant } from "@mui/material";

export interface ButtonStyleProps extends CommonStyleProps {
  kind: ButtonKind;
}

export const StyledButtonKind = styled(Button, {
  shouldForwardProp: (prop) => !["kind", ...COMMON_STYLE_FORWARD_PROPS ].includes(prop as string),
 })
  <ButtonStyleProps>
  (({ theme, kind = "primary", width, height, padding, margin, background, backgroundHover, 
    colorText, colorHover, borderRadius, boxShadow, variant }) => {
    
    let tokens: PipelineSolucoesButtonTokens | undefined;
    switch (kind) {
    case "primary":
    case "secondary":
    case "tertiary":
    case "delete":
      tokens = theme.pipelinesolucoes?.buttons?.variants?.[kind];
      break;
    }

    const typo =
    (variant && theme.typography[variant]) ??
    theme.pipelinesolucoes?.buttons?.typography ??
    theme.typography.body1;


    return {
      // Dimensões
      width: width,
      height: height,      
      margin: margin,
      padding: tokens ? tokens.padding : padding,

      //Tipografia
      ...(typo ?? {}),

      // Visual
      textTransform: "none",      
      borderRadius: tokens ? tokens.borderRadius : borderRadius,
      boxShadow: tokens ? tokens.boxShadow : boxShadow,

      // Cores
      background: tokens ? tokens.background : background,
      color: tokens ? tokens.color : colorText,

      "&:hover": {
        background: tokens ? tokens.backgroundHover : ( backgroundHover ?? background),
        color: tokens ? tokens.colorHover : (colorHover ?? colorText),
        boxShadow: tokens ? tokens.boxShadow : boxShadow,
      },

      // Estado disabled
      "&.Mui-disabled": {
        background: theme.palette.grey[300],
        color: theme.palette.text.disabled,
        boxShadow: "none",
      },
    };
});

export const ButtonNavigationStyled = styled('a', {
  shouldForwardProp: (prop) =>
    ![ 'kind', ...COMMON_STYLE_FORWARD_PROPS ].includes(prop as string),
})<ButtonStyleProps>(
  ({
    theme,
    kind,
    height,
    background,
    backgroundHover,
    color,
    colorHover,
    padding,
    borderRadius,
    border,
    width,
    margin,
    boxShadow,
    variant
  }) => {

    let tokens: PipelineSolucoesButtonTokens | undefined;
    switch (kind) {
    case "primary":
    case "secondary":
    case "tertiary":
    case "delete":
      tokens = theme.pipelinesolucoes?.buttons?.variants?.[kind];
      break;
    }

    const typo =
    (variant && theme.typography[variant]) ??
    theme.pipelinesolucoes?.buttons?.typography ??
    theme.typography.body1;
    
    return {
        
      // Dimensões
      width: width ?? 'auto',
      height: height,      
      margin: margin ?? '0',
      padding: tokens ? tokens.padding : padding,

      //Tipografia
      ...(typo ?? {}),

      // Visual
      textTransform: "none",      
      borderRadius: tokens ? tokens.borderRadius : borderRadius,
      boxShadow: tokens ? tokens.boxShadow : boxShadow,
      border,
      textDecoration: 'none',
      cursor: 'pointer',
      textAlign: 'center',

      // Cores
      background: tokens ? tokens.background : background,
      color: tokens ? tokens.color : color,


      '&:hover': {
        background: tokens
          ? tokens.backgroundHover
          : backgroundHover ?? background,
        color: tokens ? tokens.colorHover : colorHover ?? color,
      },
    };
  }
);


export interface LinkStyleProps
  extends LayoutProps,
    ColorProps {
    textDecoration: 'none' | 'underline'; 
    variant?: TypographyVariant;
  };
  
export const LinkStyled = styled("a", {
  shouldForwardProp: (prop) =>
    ![
      "width",
      "height",
      "padding",
      "margin",
      "background",
      "backgroundHover",
      "colorHover",
      "variant",
      "textDecoration",
    ].includes(prop as string),
})<LinkStyleProps>(
  ({
    theme,
    background,
    backgroundHover,
    color,
    colorHover,
    padding,
    width,
    margin,
    textDecoration = "none",
    variant,
  }) => {
    const typo =
      (variant && theme.typography[variant]) ??
      theme.pipelinesolucoes?.buttons?.typography ??
      theme.typography.body1;

    return {
      ...typo,

      display: "inline-block",
      width,
      margin,
      padding,

      cursor: "pointer",
      textDecoration,
      textTransform: "none",
      textAlign: "center",

      backgroundColor: background,
      color,

      "&:hover": {
        backgroundColor: backgroundHover,
        color: colorHover ?? color,
        borderBottom: `1px solid ${colorHover ?? color ?? "currentColor"}`,
      },
    };
  }
);