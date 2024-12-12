import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import propertiesService from "./services/properties.service";
import Layout from "./layouts/Layout";
import PropertyDeatils from "./pages/PropertyDeatils";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
