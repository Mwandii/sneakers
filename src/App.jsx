import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar        from "./components/layout/Navbar";
import Footer        from "./components/layout/Footer";
import Homepage      from "./components/pages/Homepage";
import CataloguePage from "./components/pages/CataloguePage";
import CategoryPage  from "./components/pages/CategoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                        element={<Homepage />}      />
          <Route path="/catalogue"               element={<CataloguePage />} />
          <Route path="/catalogue/:categoryId"   element={<CategoryPage />}  />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}