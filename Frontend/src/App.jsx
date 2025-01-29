import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Accueil from "./components/Accueil";
import RecettesList from "./components/RecettesList";
import Recette from "./components/Recette";
import Recherche from "./components/Recherche";
import ErrorPage from "./components/ErrorPage";
import useGetRecettes from "./hooks/useGetRecettes";
import { useEffect, useState } from "react";

const App = () => {
  const [recettes, setRecettes] = useState([]);

  // Get Recettes list from DB with useGetRecettes Hook
  useEffect(() => {
    useGetRecettes().then((recettes) => setRecettes(recettes));
  }, []);

  // Create variables for every recettes types
  const entrees = recettes.filter((recette) => recette.type === "entrée");
  const plats = recettes.filter((recette) => recette.type === "plat");
  const desserts = recettes.filter((recette) => recette.type === "dessert");
  const autres = recettes.filter((recette) => recette.type === "autre");

  // Get the Saved Theme from localStorage or Preferred Theme from browser settings
  const getTheme = () => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    } else {
      return window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light";
    }
  };

  // Initialize Theme State, use stored/preferred theme from getTheme() as default state
  const [theme, setTheme] = useState(getTheme());

  // Set Dark Theme Function
  const setDarkTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  // Set Light Theme Function
  const setLightTheme = () => {
    document.documentElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
    setTheme("light");
  };

  // Switch Theme Button Handler
  const themeSwitcher = (theme) => {
    theme === "dark" ? setLightTheme() : setDarkTheme();
  };

  // Watch for Browser Settings changes && switch Theme accordingly
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const preferredTheme = event.matches ? "dark" : "light";
      localStorage.setItem("theme", preferredTheme);
      setTheme(preferredTheme);
    });

  // Watch for Theme Settings changes && switch Theme accordingly
  useEffect(() => {
    theme === "dark" ? setDarkTheme() : setLightTheme();
  }, [theme]);

  return (
    <>
      {/* APP ROUTES */}
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Accueil recettes={recettes} />} />
          <Route
            path={"/entrees"}
            element={<RecettesList type={"Entrées"} recettes={entrees} />}
          />
          <Route
            path={"/plats"}
            element={<RecettesList type={"Plats"} recettes={plats} />}
          />
          <Route
            path={"/desserts"}
            element={<RecettesList type={"Desserts"} recettes={desserts} />}
          />
          <Route
            path={"/autres"}
            element={<RecettesList type={"Autres"} recettes={autres} />}
          />
          <Route
            path={"/recettes/:nom"}
            element={<Recette recettes={recettes} />}
          />
          <Route
            path={"/recherche"}
            element={<Recherche recettes={recettes} />}
          />
          <Route path="/erreur" element={<ErrorPage />} />
          {/* Redirect any unknown routes/pages to the erreur route/page */}
          <Route path="*" element={<Navigate replace to="/erreur" />} />
        </Routes>
      </Router>
      {/* FOOTER BUTTONS */}
      <div>
        {/* SCROLL TOP BUTTON */}
        <button
          className={"scrollTopButton"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z" />
          </svg>
        </button>
        {/* SWITCH THEME BUTTON */}
        <button
          className={"themeButton"}
          id={"themeButton"}
          onClick={() => themeSwitcher(theme)}
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
            </svg>
          )}
        </button>
        {/* PETITE GRIFFE */}
        <a
          className={"petiteGriffe"}
          href={"https://cddev.fr"}
          target={"_blank"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
          </svg>
          {"</cddev.fr>"}
        </a>
      </div>
    </>
  );
};
export default App;
