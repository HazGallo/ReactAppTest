import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, theme } from "@iseazy/react-kit";
import { ChakraProvider } from "@chakra-ui/react";
import '@fontsource/roboto';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ChakraProvider>

);
