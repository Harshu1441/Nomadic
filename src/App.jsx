import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import TripSchedulePage from "./pages/trip-schedule-page";
import TripPage from "./pages/trip-page";
import BrowseTrip from './pages/browse-trip';
import TripPlan from "./pages/trip.plan";
import AboutUs from "./pages/about-us";
import Tours from "./Admin/AdminPages/Tours";
import Users from "./Admin/AdminPages/Users";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/register-page":
        title = "";
        metaDescription = "";
        break;
      case "/trip-schedule-page":
        title = "";
        metaDescription = "";
        break;
      case "/trip-page":
        title = "";
        metaDescription = "";
        break;
      case "/trip-plan":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/admin":
        title = "";
        metaDescription = "";
        break;
      case "/users":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/trip-schedule-page" element={<TripSchedulePage />} />
      <Route path="/trip-page" element={<TripPage />} />
      <Route path="/browse-trip" element={<BrowseTrip />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/trip-plan" element={<TripPlan />} />
      <Route path="/users" element={<Users />} />
      <Route path="/admin" element={<Tours />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}
export default App;
