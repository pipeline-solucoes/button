import React from "react";
import { StyledButtonKind } from "./StyledButton";
import { CommonStyleProps } from "../types/style/CommonStyleProps";
import { ButtonKind } from "@pipelinesolucoes/theme";
import { TypographyVariant } from "@mui/material";

export interface SubmitButtonProps extends CommonStyleProps {
  kind?: ButtonKind;  
  text: string;
  aria_label: string;
  icon?: React.ReactNode;
  disabled?: boolean;  
  variant?: TypographyVariant;    
  form?: string;
}

/**
 * Botão de submit estilizado baseado no tema e com tipografia configurável via `variant`.
 * 
 *  Uso da prop `kind`:
 * - A prop `kind` aplica estilos automaticamente a partir dos tokens
 *   definidos no tema do projeto (`theme.pipelinesolucoes?.buttons`) conforme README”.
 * - Para utilizar `kind`, é necessário que o projeto implemente essa
 *   estrutura no `ThemeProvider`.
 * - Caso o tema não possua essa configuração, o componente continuará
 *   funcionando normalmente, utilizando apenas os valores informados
 *   via props ou os padrões do Material UI.
 *
 * @param {string} text Texto exibido dentro do botão.
 * @param {TypographyVariant} [variant="body1"] Variante da tipografia usada no texto.
 * @param {React.ReactNode} icon Ícone opcional exibido antes do texto.
 * @param {ButtonKind} [kind="none"] Token visual aplicado ao botão.
 * @param {string} [width="auto"] Largura do botão.
 * @param {string} [height="auto"] Altura do botão.
 * @param {string} [padding="12px 20px"] Espaçamento interno.
 * @param {string} [margin="0"] Margem externa.
 * @param {boolean} [disabled=false] Estado desabilitado.
 * @param {string} [background="transparent"] Cor de fundo.
 * @param {string} backgroundHover Cor de fundo no hover.
 * @param {string} colorText Cor do texto.
 * @param {string} colorHover Cor do texto no hover.
 * @param {string} [borderRadius="0"] Raio da borda.
 * @param {string} [boxShadow="none"] Sombra do botão.
 * @param {string} aria_label Texto para acessibilidade.
 * @param {TypographyVariant} [variant="body1"] Variante da tipografia usada no texto.
 *
 * @example
 * ```tsx
 * <SubmitButton
 *   text="Enviar"
 *   variant="h6"
 *   onClick={() => console.log("clicou")}
 * />
 * ```
 */
const SubmitButton: React.FC<SubmitButtonProps> = ({
  kind = "none",
  width = "auto",
  height = "auto",
  padding = "12px 20px",
  margin = "0",
  text,
  icon,
  disabled = false,
  background = "transparent",
  backgroundHover,
  color,
  colorHover,
  borderRadius = "0",
  boxShadow = "none",
  variant,
  aria_label,
  form
}) => {

  return (
    <StyledButtonKind
      type="submit"
      form={form}
      kind={kind}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      disabled={disabled}
      startIcon={icon}      
      background={background}
      backgroundHover={backgroundHover}
      colorText={color}
      colorHover={colorHover}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      aria-label={aria_label}
      variantButton={variant}
    >
      {text}
    </StyledButtonKind>
  );
};

SubmitButton.displayName = "SubmitButton";
export default SubmitButton;
