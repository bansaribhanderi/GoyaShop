import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/page/Product";
import Home from "./components/page/Home";
import Singaldata from "./components/Singaldata";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="Singaldata/:id" element={<Singaldata />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
