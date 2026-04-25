import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onPageChange={setCurrentPage} />;
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}
