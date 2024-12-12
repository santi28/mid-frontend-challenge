import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropertiesProvider } from "./contexts/PropertiesContext.tsx";
import { UIContextProvider } from "./contexts/UIContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UIContextProvider>
        <PropertiesProvider>
          <App />
        </PropertiesProvider>
      </UIContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
