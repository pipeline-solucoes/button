import React from 'react';
import { styled } from '@mui/material/styles';

/**
 * Interface de propriedades para o componente `DownloadButton`.
 *
 * Use este botão para disponibilizar o download de um arquivo mantendo
 * controle total sobre cores, raio de borda, sombra, dimensões e ícone.
 *
 * As propriedades marcadas com `@default` indicam o valor que será utilizado
 * quando a prop não for fornecida ao componente.
 */
export interface DownloadButtonProps {
  /**
   * URL do arquivo a ser baixado.
   */
  file: string;

  /**
   * Nome do arquivo que será salvo no disco.
   */
  fileName: string;

  /**
   * Cor de fundo do botão.
   * @default "#1976d2"
   */
  background?: string;

  /**
   * Cor de fundo exibida no estado hover.
   * @default "#1565c0"
   */
  backgroundHover?: string;

  /**
   * Cor do texto do botão.
   * @default "#fff"
   */
  color?: string;

  /**
   * Cor do texto exibida no estado hover.
   * Se não informada, herda a mesma cor definida em `color`.
   */
  colorHover?: string;

  /**
   * Raio da borda do botão (qualquer valor CSS válido).
   * @default "8px"
   */
  borderRadius?: string;

  /**
   * Sombra do botão (valor CSS de box-shadow).
   * @default "none"
   */
  boxShadow?: string;

  /**
   * Ícone opcional exibido à esquerda do conteúdo.
   */
  icon?: React.ReactNode;

  /**
   * Conteúdo textual do botão (recomendado utilizar `Typography`).
   */
  children: React.ReactNode;

  /**
   * Texto de acessibilidade que descreve a função do botão
   * para leitores de tela (atributo `aria-label`).
   */
  arialLabel: string;

  /**
   * Largura do botão (valor CSS).
   * @default "auto"
   */
  width?: string;

  /**
   * Altura do botão (valor CSS).
   * @default "fit-content"
   */
  height?: string;
}

const StyledLink = styled('a', {
  shouldForwardProp: (prop) =>
    ![
      'background',
      'backgroundHover',
      'color',
      'colorHover',
      'borderRadius',
      'boxShadow',
      'width',
      'height'
    ].includes(prop as string),
})<{
  background?: string;
  backgroundHover?: string;
  color?: string;
  colorHover?: string;
  borderRadius?: string;
  boxShadow?: string;
  width: string;
  height: string;
}>(({ background, backgroundHover, color, colorHover, borderRadius, boxShadow, width, height }) => ({
  width: width,
  height: height,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  background: background || '#1976d2',
  color: color || '#fff',
  borderRadius: borderRadius || '8px',
  boxShadow: boxShadow || 'none',
  padding: '8px 16px',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: backgroundHover || '#1565c0',
    color: colorHover || color || '#fff',
  },
}));

/**
 * Botão de download customizável com suporte a ícone e conteúdo centralizado.
 * O texto deve ser passado via `Typography` como children.
 *
 * ### Parâmetros
 * @param {string} file URL do arquivo a ser baixado.
 * @param {string} fileName Nome do arquivo que será salvo.
 * @param {string} [background="#1976d2"] Cor de fundo padrão do botão. **@default** "#1976d2"
 * @param {string} [backgroundHover="#1565c0"] Cor de fundo no hover. **@default** "#1565c0"
 * @param {string} [color="#fff"] Cor do texto padrão. **@default** "#fff"
 * @param {string} [colorHover] Cor do texto no hover (herda `color` quando ausente).
 * @param {string} [borderRadius="8px"] Raio da borda do botão. **@default** "8px"
 * @param {string} [boxShadow="none"] Sombra do botão. **@default** "none"
 * @param {string} arialLabel Texto de acessibilidade (atributo `aria-label`).
 * @param {React.ReactNode} [icon] Ícone opcional exibido à esquerda do conteúdo.
 * @param {React.ReactNode} children Conteúdo do botão (ex.: `Typography`).
 * @param {string} [width="auto"] Largura do botão (valor CSS). **@default** "auto"
 * @param {string} [height="fit-content"] Altura do botão (valor CSS). **@default** "fit-content"
 *
 * @example
 * ```tsx
 * import { Typography } from '@mui/material';
 * import { Download as DownloadIcon } from '@mui/icons-material';
 *
 * <DownloadButton
 *   file="/docs/manual.pdf"
 *   fileName="manual.pdf"
 *   arialLabel="Baixar manual do produto"
 *   background="#28a745"
 *   backgroundHover="#218838"
 *   color="#fff"
 *   borderRadius="12px"
 *   boxShadow="0 2px 8px rgba(0,0,0,0.15)"
 *   width="220px"
 *   height="44px"
 *   icon={<DownloadIcon />}
 * >
 *   <Typography variant="button">Baixar Manual</Typography>
 * </DownloadButton>
 * ```
 */
const DownloadButton: React.FC<DownloadButtonProps> = ({
  width = 'auto',
  height = 'fit-content',
  file,
  fileName,
  background,
  backgroundHover,
  color,
  colorHover,
  borderRadius,
  boxShadow,
  arialLabel,
  icon,
  children,
}) => {
  return (
    <StyledLink
      href={file}
      download={fileName}
      background={background}
      backgroundHover={backgroundHover}
      color={color}
      colorHover={colorHover}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      aria-label={arialLabel}
      width={width}
      height={height}
    >
      {icon && <span>{icon}</span>}
      {children}
    </StyledLink>
  );
};

DownloadButton.displayName = 'DownloadButton';

export default DownloadButton;
