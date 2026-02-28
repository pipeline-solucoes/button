'use client';

import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


/**
 * Propriedades do componente `WhatsAppIcon`.
 */
export interface WhatsAppFlutuanteProps {
  whatsapp: string;
  right?: string;
}

/**
 * Componente flutuante de ação rápida para contato via WhatsApp.
 *
 * Renderiza um botão circular fixo na tela utilizando o `Fab` do Material UI,
 * contendo o ícone oficial do WhatsApp. Ao ser clicado, abre uma nova aba
 * direcionando para a URL `https://wa.me/{whatsapp}`, iniciando a conversa
 * com o número informado.
 *
 * Principais funcionalidades:
 * - Exibição de botão flutuante fixado no viewport.
 * - Abertura segura de nova aba (`noopener,noreferrer`) para o WhatsApp.
 * - Posicionamento horizontal configurável.
 * - Aplicação de cor oficial do WhatsApp.
 * - Controle de sobreposição via `z-index` elevado.
 *
 * @param {string} whatsapp
 * Número de telefone que será utilizado para iniciar a conversa no WhatsApp.
 *
 * Regras obrigatórias:
 * - Informar apenas dígitos.
 * - Incluir código do país (DDI).
 * - Não utilizar espaços, parênteses ou caracteres especiais.
 *
 * Exemplo válido (Brasil):
 * `"5511999999999"`
 *
 * @param {string} [right='24px']
 * Define a distância horizontal entre o botão e a borda direita da viewport.
 *
 * Aceita qualquer valor CSS válido:
 * - `"24px"`
 * - `"2rem"`
 * - `"5%"`
 *
 * Ordem de prioridade:
 * `right` → `'24px'`
 *
 * ─────────────────────────────────────────────
 * @example Ajustando posição horizontal
 *
 * ```tsx
 * <WhatsAppFlutuante
 *   whatsapp="5511999999999"
 *   right="40px"
 * />
 * ```
 */
const WhatsAppFlutuante: React.FC<WhatsAppFlutuanteProps> = ({ whatsapp, right = '24px' }) => {
    return (
      <Fab
        aria-label="button whatsapp"
        onClick={() => window.open(`https://wa.me/${whatsapp}`, '_blank', 'noopener,noreferrer')}
        sx={{
          position: 'fixed',
          right: right,
          bottom: 24,
          zIndex: 1300,
          bgcolor: '#25D366',
          '&:hover': { bgcolor: '#1ebe5d' },
        }}
      >
        <WhatsAppIcon sx={{ color: 'white' }} />
      </Fab>
    );
};

export default WhatsAppFlutuante;

