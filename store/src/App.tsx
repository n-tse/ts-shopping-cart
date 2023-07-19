import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Suspense } from "react";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  return (
      <ShoppingCartProvider>
        <Navbar />
        {/* <Container> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/success" element={<OrderSuccess />} />
          </Routes>
        </Suspense>
        {/* </Container> */}
      </ShoppingCartProvider>
  );
}

export default App;
