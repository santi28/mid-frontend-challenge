import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("@/layouts/Layout"));
const Home = lazy(() => import("@/pages/Home"));
const PropertyDeatils = lazy(() => import("@/pages/PropertyDeatils"));
const PropertyCreatePage = lazy(() => import("@/pages/PropertyCreatePage"));
const PropertyEditPage = lazy(() => import("@/pages/PropertyEditPage"));

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="propiedad/:id" element={<PropertyDeatils />} />
      </Route>

      <Route path="propiedad/crear" element={<PropertyCreatePage />} />
      <Route path="propiedad/editar/:id" element={<PropertyEditPage />} />
    </Routes>
  );
}
