import ContextWrapper from "@/contexts/ContextWrapper";
import Layout from "@/layouts/Layout";
import queryClient from "@/lib/queryClient";
import Home from "@/pages/Home";
import PropertyCreatePage from "@/pages/PropertyCreatePage";
import PropertyDeatils from "@/pages/PropertyDeatils";
import PropertyEditPage from "@/pages/PropertyEditPage";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <ContextWrapper>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="propiedad/:id" element={<PropertyDeatils />} />
            </Route>
            <Route path="propiedad/crear" element={<PropertyCreatePage />} />
            <Route path="propiedad/editar/:id" element={<PropertyEditPage />} />
          </Routes>
        </ContextWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
