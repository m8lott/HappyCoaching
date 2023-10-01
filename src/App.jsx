import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Guide from "./pages/Guide/Guide";
import About from "./pages/About/About";
import Sales from "./pages/Sales/Sales";
import ButtonUp from "./components/buttonUp/ButtonUp";

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/aboutme" element={<About />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/sales" element={<Sales />} />
    </Routes>
<ButtonUp />
    <Form />
    <Footer />
    </Router>
    </>

  )

}

export default App
