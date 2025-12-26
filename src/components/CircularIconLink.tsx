'use client';
import React, { ReactElement } from 'react';
import { Box, IconButton, SvgIconProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) =>
    !['background_color', 'padding', 'border'].includes(prop as string),
})<{
  background_color: string;
  padding: string;
  border: string;
}>(({ background_color, padding, border }) => ({
  backgroundColor: background_color,
  padding: padding,
  borderRadius: '50%',
  display: 'inline-block',
  border: border,
}));

/**
 * Propriedades do componente `CircularIconLink`.
 */
export interface CircularIconLinkProps {
  /**
   * Ícone do Material UI (`<SvgIcon>`) ou uma imagem (`<img>`).
   * Aceita:
   * ```tsx
   * <Instagram sx={{ color: 'white' }} />
   * // ou
   * <img src="/logo.png" alt="logo" width={24} height={24} />
   * ```
   */
  children: ReactElement<HTMLImageElement> | ReactElement<SvgIconProps>;

  /** URL a ser aberta (opcional se onClick for usado) */
  url?: string;

  /** Cor de fundo do círculo */
  background_color: string;

  /** Texto para acessibilidade (`aria-label`) */
  aria_label: string;

  /** Padding interno do círculo. @default "4px" */
  padding?: string;

  /** Estilo da borda. @default "2px solid transparent" */
  border?: string;

  /** Define se o link será aberto em nova aba. @default true */
  openInNewTab?: boolean;

  /** Evento de clique customizado. Se definido, sobrescreve o comportamento padrão */
  onClick?: () => void;
}

/**
 * **CircularIconLink**
 *
 * Componente que exibe um **ícone ou imagem dentro de um círculo clicável**,
 * permitindo criar links visuais para redes sociais, sites ou qualquer URL externa.
 *
 * - Aceita ícones do Material UI (`<SvgIcon>`) ou imagens (`<img>`).
 * - O círculo possui cor de fundo, padding e borda personalizáveis.
 * - Ao clicar, executa o `onClick` se definido, caso contrário abre a `url` em nova aba ou na mesma aba.
 */
const CircularIconLink: React.FC<CircularIconLinkProps> = ({
  url,
  background_color = 'transparent',
  aria_label,
  padding = '4px',
  border = 'none',
  children,
  openInNewTab = true,
  onClick,
}) => {
  const handleClick = () => {
    if (url) {
      const target = openInNewTab ? '_blank' : '_self';
      const features = openInNewTab ? 'noopener noreferrer' : '';
      window.open(url, target, features);
    }
  };

  return (
    <StyledBox background_color={background_color} padding={padding} border={border}>
      <IconButton aria-label={aria_label} onClick={onClick || handleClick}>
        {children}
      </IconButton>
    </StyledBox>
  );
};

export default CircularIconLink;
