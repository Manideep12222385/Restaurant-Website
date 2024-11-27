// App.js
import "./App.css";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./authContext";
import MainRoutes from "./Routes/MainRoutes";
import Register from "./components/m-components/firebaseVerification/register";
import Login from "./components/m-components/firebaseVerification/login";
import Navbar from "./components/p-components/navbar/Navbar";
import Footer from "./components/p-components/footer/Footer";
import InitialTransition from "./animations/intialTransition";
import BackgroundZoom from "./animations/grainyFilter";
import { SkeletonTheme } from "react-loading-skeleton";


function App() {
  
  return (
    <>
    <SkeletonTheme>
    <AuthProvider>
      <Navbar />
      <MainRoutes />
      <Footer />
    </AuthProvider>
    </SkeletonTheme>
    </>
  );
}

export default App;
