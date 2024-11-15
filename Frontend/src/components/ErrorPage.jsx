import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={"erreur-container"}>
      <h1>Cette page n'existe pas</h1>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
};

export default ErrorPage;
