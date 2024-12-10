import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="dashboard" element={<><h1>Dashboard</h1><Outlet /></>}>
          <Route index element={<h1>Home</h1>} />
          <Route path="mail" element={<h1>Mail</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
