import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExperience from "./pages/WorkExperience/WorkExperience";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext";
import MobileNav from "./components/MobileNav/MobileNav";
import { ToastContainer } from "react-toastify";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExperience />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <h4 className="text-center">Made with ❤️Nirmala &copy; 2026</h4>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
