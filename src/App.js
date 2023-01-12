import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactsPage from "./pages/contactsPage/ContactsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>

      <Route path="/contacts" element={<ContactsPage />}></Route>
    </Routes>
  );
}

export default App;
