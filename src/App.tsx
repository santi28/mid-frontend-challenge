import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import propertiesService from "./services/properties.service";
import Layout from "./layouts/Layout";
import PropertyDeatils from "./pages/PropertyDeatils";
import PropertyCreation from "./pages/PropertyFormPage";

function App() {
  (async () => {
    const properties = await propertiesService.fetchProperties({});
    console.log(properties);
  })();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="propiedad/:id" element={<PropertyDeatils />} />
        </Route>
        <Route path="propiedad/crear" element={<PropertyCreation />} />
        <Route path="propiedad/editar/:id" element={<PropertyCreation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
