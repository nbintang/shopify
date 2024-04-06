import Navbar from "./components/UI/Navbar";
import Hero from "./components/templates/HeroLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/UI/Sidebar";
import ErrorPages from "./pages/errorpages";
import ProductPages from "./pages/ProductPages";

function App() {
  return (
    <>
      <main className="overflow-hidden">
        <Router>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Hero />} />
            <Route path="/product/:id" element={<ProductPages/>} ></Route>
            <Route path="*" element={<ErrorPages/>} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
