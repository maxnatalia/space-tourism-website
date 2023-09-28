import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { GlobalStyle } from "./core/GlobalStyles";
import { theme } from "./core/theme";
import App from "./App";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <StyleSheetManager
        shouldForwardProp={prop =>
          ![
            "show",
            "bgdesktop",
            "reverseMobileNavCol",
            "reverseNavRow",
            "mobileImageSize",
            "mobileReverseCol",
            "active",
            "reverseCol",
            "reverseRow",
            "reverseNavCol",
            "smaller",
            "end",
          ].includes(prop)
        }
      >
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </StyleSheetManager>
    </QueryClientProvider>
  </React.StrictMode>
);
