import { createTheme } from '@mui/material/styles';

// Definindo o tema personalizado
const theme = createTheme({
  
  palette: {
          
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
    },    
  },
  typography: {
    fontFamily: 'var(--font-plusjakarta), Arial, sans-serif',       
    body1: {
      fontSize: '16px', // Desktop
      lineHeight: '1.5',
      letterSpacing: '0.01em',
      fontWeight: 400,           
    },    
  },  
});

export { theme };