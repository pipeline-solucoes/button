'use client';

import React from 'react';
import { TypographyVariant } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { LinkStyled, LinkStyleProps } from './StyledButton';


interface NavigationLinkProps extends LinkStyleProps {  
  url: string;
  aria_label: string;    
  textDecoration: 'none' | 'underline';    
  text: string; 
  variant?: TypographyVariant;    
}

/**
 * Componente que renderiza um link de navegação estilizado usando `styled` do Material UI.
 * Ele aplica estilos customizáveis (layout e cores) e encapsula o texto com `Typography`.
 *
 * Quando a `url` contém `"http"`, o link é tratado como **externo** e abre em uma nova aba
 * com `target="_blank"` e `rel="noopener noreferrer"`. Caso contrário, o link é tratado como **interno**
 * e abre na mesma aba.
 *
 * @param {string} url URL de destino do link. Se contiver "http", será considerado link externo.
 * @param {string} aria_label Rótulo de acessibilidade aplicado em `aria-label` no elemento `<a>`.
 * @param {string} [background_color='transparent'] Cor de fundo do link.
 * @param {string} [background_color_hover] Cor de fundo no hover. Se não for informada, usa `background_color`.
 * @param {string} color Cor do texto do link.
 * @param {string} [color_hover] Cor do texto no hover. Se não for informada, usa `color`.
 * @param {'none' | 'underline'} [text_decoration='none'] Estilo de decoração do texto (`text-decoration`) do link.
 * @param {string} width Largura do link (ex.: `'100%'`, `'auto'`, `'200px'`).
 * @param {string} [margin='0'] Margem externa do link.
 * @param {string} [padding='0'] Espaçamento interno do link.
 * @param {string} text Texto exibido dentro do link.
 * @param {TypographyVariant} [variant='body1'] Variante do `Typography` do Material UI utilizada para renderizar o texto.
 *
 * @example
 * ```tsx
 * import { NavigationLink } from '@/components/NavigationLink';
 *
 * export const Example = () => {
 *   return (
 *     <>
 *       <NavigationLink
 *         url="/about"
 *         aria_label="Ir para a página Sobre"
 *         color="#222"
 *         text="Sobre"
 *         width="auto"
 *         padding="8px 12px"
 *         text_decoration="none"
 *         variant="body2"
 *       />
 *
 *       <NavigationLink
 *         url="https://example.com"
 *         aria_label="Abrir site externo"
 *         color="#1976d2"
 *         color_hover="#0d47a1"
 *         background_color="transparent"
 *         background_color_hover="transparent"
 *         text="Site externo"
 *         width="auto"
 *         margin="0 0 0 12px"
 *         padding="8px 12px"
 *         text_decoration="underline"
 *       />
 *     </>
 *   );
 * };
 * ```
 */

const NavigationLink: React.FC<NavigationLinkProps> = ({ 
  url, aria_label, background='transparent', backgroundHover,
  color, colorHover, textDecoration = 'none', 
  width, margin='0', padding='0', text, variant = "body1",   }) => {
  
    const backgroundColor : string = background;
    const backgroundColorHover : string = backgroundHover ?? backgroundColor;
    const color_hover : string = colorHover ? colorHover : (color ?? 'black');      
    
    if (url.indexOf('http') != -1) {

      return (
        <LinkStyled 
          href={url}
          width={width}
          background={backgroundColor}
          backgroundHover={backgroundColorHover}
          color={color} 
          colorHover={color_hover}          
          padding={padding}
          margin={margin}
          textDecoration={textDecoration}
          aria-label= {aria_label}  
          target="_blank"          
          rel="noopener noreferrer">
          <Typography variant={variant}>{text}</Typography>
        </LinkStyled>
      );    
    }
    else{

      return (
        <LinkStyled
          href={url} 
          width={width}
          background={backgroundColor}
          backgroundHover={backgroundColorHover}
          color={color} 
          colorHover={color_hover}         
          padding={padding}
          margin={margin}
          aria-label= {aria_label}  
          textDecoration={textDecoration}                 
        >
          <Typography variant={variant}>{text}</Typography>
        </LinkStyled>
      );  
    }        
};

export default NavigationLink;