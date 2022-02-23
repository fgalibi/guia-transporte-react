import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { GlobalStyle } from "../GlobalStyle";

import Header from "../components/template/Header";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import AppRoutes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Nav />
      <ToastContainer />
      <AppRoutes />

      <Footer />
    </div>
  );
};
export default App;
