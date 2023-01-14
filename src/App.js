import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/skills" element={<SkillsPage />}></Route>
      <Route path="/portfolio" element={<PortfolioPage />}></Route>

      <Route path="/contacts" element={<ContactsPage />}></Route>
    </Routes>
  );
}

export default App;
