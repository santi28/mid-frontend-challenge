import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import propertiesService from "./services/properties.service";

function App() {
  (async () => {
    const properties = await propertiesService.fetchProperties({});
    console.log(properties);
  })();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
