import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropertiesProvider } from "./contexts/PropertiesContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PropertiesProvider>
        <App />
      </PropertiesProvider>
    </QueryClientProvider>
  </StrictMode>
);
