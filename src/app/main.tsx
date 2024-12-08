import "./index.css";
import AppProvider from "./App";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material";

const rootElement = document.getElementById("root");
let root;
if (rootElement) {
  root = createRoot(rootElement);
}

const theme = createTheme({
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiDialog: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
});

if (root) {
  root.render(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <AppProvider />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
