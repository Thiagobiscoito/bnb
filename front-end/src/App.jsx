import Header from "./componets/Header.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
