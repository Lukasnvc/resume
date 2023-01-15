import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import EducationPage from "./pages/educationPage/EducationPage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/notFounPage/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/education" element={<EducationPage />}></Route>
        <Route path="/skills" element={<SkillsPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
