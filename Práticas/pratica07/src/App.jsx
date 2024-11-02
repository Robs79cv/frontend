import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";
import Error404 from "./Pages/Error404";
import Layout from "./Pages/Layout";

function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route index element={<Login />} />
    <Route element={<Layout />} />
    <Route path="/home" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
</BrowserRouter>
    </>
  );
}

export default App;