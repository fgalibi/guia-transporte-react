import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./App.css";

import Header from "../components/template/Header";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
};
export default App;
