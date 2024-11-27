import { Route, Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Home from "./components/Home";
import ProductList from "./components/products/ProductList";
import ProductLayout from "./components/products/ProductLayout";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<ProductList />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
