import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

  interface ButtonOptions {
    background: string;
    backgroundHover: string;
    color: string;    
    colorHover: string;
    borderRadius: string;
    boxShadow?: string;
    padding: string;
  }

  interface Palette {
    custom: {                  
      primaryButton: ButtonOptions;
      secondaryButton: ButtonOptions;      
      deleteButton: ButtonOptions;
      borderColor?: string;
    };
  }
  interface PaletteOptions {
    custom?: {  
      primaryButton: ButtonOptions;
      secondaryButton: ButtonOptions;  
      deleteButton: ButtonOptions;
      borderColor?: string;
    };
  }
}

// Definindo o tema personalizado
const theme = createTheme({
  breakpoints: { 
    values: { 
      xs: 0, // Extra small devices (phones) 
      sm: 600, // Small devices (tablets) 
      md: 960, // Medium devices (desktops) 
      lg: 1280, // Large devices (large desktops) 
      xl: 1920, // Extra large devices (extra large desktops) 
    }, 
  },  
  shape: { 
    borderRadius: 12  
  },  
  palette: {
    background:{
      default: '#FEFEFE',
      paper: 'linear-gradient(180deg, #edf3fa, white 50%, #edf3fa)',
    },
    primary: {
      main: "#0a58c8",
      dark: "#003d5c",
      light: "#d1e6ff",
    },
    secondary: {
      main: '#F2F4F6', 
      light: '#FEFEFE',      
    },    
    text: {
      primary: '#334866',
      secondary: '#FEFEFE',
      disabled: '#A9A9A9',
    },          
    custom: {
      primaryButton:{
        background: "#216fed",
        backgroundHover: '#005ce3',
        color: '#ffffff',
        colorHover: '#ffffff',
        borderRadius: "9999px", 
        padding: '0',  
      },
      secondaryButton: {
        background: '#ffffff', 
        backgroundHover: '#ffffff',
        color: "#216fed",
        colorHover: '#005ce3',
        borderRadius: "9999px",
        padding: '0',
      },
      deleteButton:{
        background: "#F44336",
        backgroundHover: '#F44336',
        color: '#ffffff',
        colorHover: '#ffffff',
        borderRadius: "9999px", 
        padding: '0',  
      },
      borderColor: '#8c8c8c',
    },
    info: {
      main: '#555f56',
    },
    error: {
      main: '#F44336',
    },
    success: {
      main: '#4CAF50',
    },
    grey: {
      "100": '#F2F4F6',
      "200": '#edf3fa',  
      "300": '#e2e3e4',  
      "400": '#edf3fa',   
      '700': '#0000008a',          
      "900": '#334866', 
    },
  },
  typography: {
    fontFamily: 'var(--font-plusjakarta), Arial, sans-serif',
    h1: {         
      fontSize: '50px', // Desktop     
      lineHeight: '1.0',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',
      color: '#2b2e33',
      padding: '8px 0px',    
      '@media (min-width:601px) and (max-width:1280px)': {
        fontSize: '44px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '36px', // Mobile
      },
    },
    h2: {      
      fontSize: '18px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      color: '#292929',    
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '18px', // Tablet
      },
      fontStyle: 'normal',
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    h3: {
      fontSize: '32px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '28px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '24px', // Mobile
      },
    },
    h4: {
      fontSize: '24px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '24px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '20px', // Mobile
      },
    }, 
    h5: {
      fontSize: '18px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '18px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '18px', // Mobile
      },
    },     
    body1: {
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,      
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    body2: { 
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,     
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '16px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '16px', // Mobile
      },
    },
    caption: {
      /* tipografia pensada para textos de apoio ou legendas pequenas, normalmente usados abaixo de imagens, gráficos, tabelas ou ícones */
      fontSize: '14px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,     
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '14px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '14px', // Mobile
      },
    }, 
    subtitle1: {
      /* tipografia pensada para textos secundários, geralmente usados em legendas, descrições curtas ou suporte visual para títulos.*/
      fontSize: '18px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 500,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '18px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '18px', // Mobile
      },
    },
    subtitle2: {
      /* tipografia pensada para textos secundários, geralmente usados em legendas, descrições curtas ou suporte visual para títulos.*/
      fontSize: '18px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 600,
      margin: 0,
      fontStyle: 'normal',      
      '@media (min-width:601px) and (max-width:960px)': {
        fontSize: '18px', // Tablet
      },
      '@media (max-width:600px)': {
        fontSize: '18px', // Mobile
      },
    },    
    overline: {
      /* para rótulos, categorias, ou textos auxiliares curtos, nunca para parágrafos ou longos blocos de texto. */

    }
    

  },
  spacing: 8,
});

export { theme };