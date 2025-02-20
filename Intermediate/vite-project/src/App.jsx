import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Creativity from "./components/Creativity";
import ContactUs from "./components/Contactus";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Page />
        <Footer />
      </>
    ),
  },
  {
    path: "/Creativity",
    element: (
      <>
        <Navbar />
        <Creativity />
        <Footer />
      </>
    ),
  },
  {
    path: "/Contactus",
    element: (
      <>
        <Navbar />
        <ContactUs />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
