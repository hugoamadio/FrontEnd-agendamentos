import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#bd5532",
    secondary: "#373b44",
    terceary: "#73c8a9",
    background: "#e1b866"
  },
  border: {
    default: "1px solid #000000b4",
    hover: "1px solid #000",
  },
};

interface DefaultThemeProps {
  children: ReactNode;
}

function ThemeDefault({ children }: DefaultThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeDefault;
