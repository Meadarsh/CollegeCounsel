import { useState } from "react";
import NavBar from "./Components/navBar";
import Home from "./Home/home";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
