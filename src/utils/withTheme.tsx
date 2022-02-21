import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";

export function withTheme<T>(WrappedComponent: React.ComponentType<T>){
  return (props: T) => {
    return <ThemeProvider theme={theme}>
      <WrappedComponent {...props} />
    </ThemeProvider>
  }
}