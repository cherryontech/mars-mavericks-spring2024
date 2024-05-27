import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TechRoles from "./pages/TechRoles";
import SkillEval from "./pages/SkillEvaluation";
import KnowledgeHub from "./pages/KnowledgeHub";
import Developer from "./pages/positions/Developer";
import ProductManager from "./pages/positions/ProductManager";
import UXDesigner from "./pages/positions/UXDesginer";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-roles" element={<TechRoles />} />
          <Route path="/skill-eval" element={<SkillEval />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/product-manager" element={<ProductManager/>} />
          <Route path="/ux-designer" element={<UXDesigner/>} />
          {/* A catch-all route for unknown paths */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
