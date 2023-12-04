import React from "react";
import { ProgressBarStyle } from "./components/ProgressBar";
import Routes from "./components/Routes";
import ThemeProvider from "./theme";

export default function App() {
  return (
    <ThemeProvider>
      <ProgressBarStyle />
      <Routes />
    </ThemeProvider>
  );
}
