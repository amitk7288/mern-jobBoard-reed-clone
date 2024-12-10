import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ui-components/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
