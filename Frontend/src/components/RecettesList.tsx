import { Link } from "react-router-dom";
import "./RecettesList.css";
import { useEffect, useState } from "react";
import Loading from "./Loading.js";
import { Recettes } from "../types.ts";
import usePageTitle from "../hooks/usePageTitle.ts";
import { convertDuration } from "../utils/convertDuration.ts";
import { spaceToUnder } from "../utils/stringManipulation.ts";
import { sortRecettes } from "../utils/sortRecettes.ts";

interface RecettesListProps {
  title: string;
  recettes: Recettes;
}

const RecettesList = (props: RecettesListProps) => {
  // Create variables for props
  const title: string = props.title;
  const recettes: Recettes = props.recettes;

  // Scroll Back to Top when when location/title change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [title]);

  // Create sorting variables
  const [sortingType, setSortingType] = useState<string>("NOM");
  const [sortingDir, setSortingDir] = useState<string>("ASC");
  const [sortedRecettes, setSortedRecettes] = useState<Recettes>(
    sortRecettes(recettes, sortingType, sortingDir),
  );

  // Sorting Button Handler
  const handleSortingButton = (type: string, direction: string) => {
    setSortingDir(direction);
    setSortingType(type);
  };

  // Manage the Page Title in HTML Head
  usePageTitle(title);

  // Get Recettes list using sorting parameters
  useEffect(() => {
    setSortedRecettes([...sortRecettes(recettes, sortingType, sortingDir)]);
  }, [recettes, sortingType, sortingDir]);

  return (
    <div className={"recettesListContainer"}>
      <h1 className={"recetteListHeader"}>{title}</h1>
      {/* SORTING BUTTONS CONTAINER*/}
      <div className={"sortingButtonContainer"}>
        {/* SORT BY NAME */}
        <button
          className={sortingType === "NOM" ? "button-active" : ""}
          onClick={() => {
            return sortingDir === "ASC"
              ? handleSortingButton("NOM", "DESC")
              : handleSortingButton("NOM", "ASC");
          }}
        >
          Nom
          {sortingType === "NOM" ? (
            sortingDir === "ASC" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400H395.8z" />
              </svg>
            )
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z" />
            </svg>
          )}
        </button>
        {/* SORT BY PERS */}
        <button
          className={sortingType === "PERS" ? "button-active" : ""}
          onClick={() => {
            return sortingDir === "ASC"
              ? handleSortingButton("PERS", "DESC")
              : handleSortingButton("PERS", "ASC");
          }}
        >
          Personnes
          {sortingType === "PERS" ? (
            sortingDir === "ASC" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M450.7 38c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h48 48c17.7 0 32-14.3 32-32s-14.3-32-32-32H464V64c0-10.3-4.9-19.9-13.3-26zM160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V365.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480zM418.3 307a32 32 0 1 1 27.4 57.9A32 32 0 1 1 418.3 307zM405.1 419.8l-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 39.2 25.6 72.4 61.1 83.8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3L95.6 181.6c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32zM450.7 294c8.3 6 13.3 15.7 13.3 26v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 384c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V364.4l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4zm-5-145.1A32 32 0 1 0 418.3 91a32 32 0 1 0 27.4 57.9zm-40.7 54.9C369.6 192.4 344 159.2 344 120c0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L449.7 251c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2z" />
              </svg>
            )
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M450.7 38c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h48 48c17.7 0 32-14.3 32-32s-14.3-32-32-32H464V64c0-10.3-4.9-19.9-13.3-26zM160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V365.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480zM418.3 307a32 32 0 1 1 27.4 57.9A32 32 0 1 1 418.3 307zM405.1 419.8l-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 39.2 25.6 72.4 61.1 83.8z" />
            </svg>
          )}
        </button>
        {/* SORT BY PREPA */}
        <button
          className={sortingType === "PREPA" ? "button-active" : ""}
          onClick={() => {
            return sortingDir === "ASC"
              ? handleSortingButton("PREPA", "DESC")
              : handleSortingButton("PREPA", "ASC");
          }}
        >
          Préparation
          {sortingType === "PREPA" ? (
            sortingDir === "ASC" ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M450.7 38c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h48 48c17.7 0 32-14.3 32-32s-14.3-32-32-32H464V64c0-10.3-4.9-19.9-13.3-26zM160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V365.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480zM418.3 307a32 32 0 1 1 27.4 57.9A32 32 0 1 1 418.3 307zM405.1 419.8l-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 39.2 25.6 72.4 61.1 83.8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3L95.6 181.6c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32zM450.7 294c8.3 6 13.3 15.7 13.3 26v96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H432 384c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V364.4l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4zm-5-145.1A32 32 0 1 0 418.3 91a32 32 0 1 0 27.4 57.9zm-40.7 54.9C369.6 192.4 344 159.2 344 120c0-48.6 39.4-88 88-88s88 39.4 88 88c0 23.5-7.5 46.3-21.5 65.2L449.7 251c-10.5 14.2-30.6 17.2-44.8 6.7s-17.2-30.6-6.7-44.8l6.8-9.2z" />
              </svg>
            )
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M450.7 38c-8.3-6-19.1-7.7-28.8-4.4l-48 16c-16.8 5.6-25.8 23.7-20.2 40.5s23.7 25.8 40.5 20.2l5.9-2V160H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h48 48c17.7 0 32-14.3 32-32s-14.3-32-32-32H464V64c0-10.3-4.9-19.9-13.3-26zM160 480c9 0 17.5-3.8 23.6-10.4l88-96c11.9-13 11.1-33.3-2-45.2s-33.3-11.1-45.2 2L192 365.7V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V365.7L95.6 330.4c-11.9-13-32.2-13.9-45.2-2s-13.9 32.2-2 45.2l88 96C142.5 476.2 151 480 160 480zM418.3 307a32 32 0 1 1 27.4 57.9A32 32 0 1 1 418.3 307zM405.1 419.8l-6.8 9.2c-10.5 14.2-7.5 34.2 6.7 44.8s34.2 7.5 44.8-6.7l48.8-65.8c14-18.9 21.5-41.7 21.5-65.2c0-48.6-39.4-88-88-88s-88 39.4-88 88c0 39.2 25.6 72.4 61.1 83.8z" />
            </svg>
          )}
        </button>
      </div>
      {/* RECETTES LIST */}
      {recettes.length > 0 ? (
        <ul className={"recettesList"}>
          {sortedRecettes.map((recette) => (
            <li key={recette.nom} className={"recette"}>
              <Link to={`/recettes/${spaceToUnder(recette.nom)}`}>
                {recette.nom}
              </Link>
              <div className={"recetteInfos"}>
                <p>️{recette.personnes} personnes</p>
                <p>-</p>
                <p>{convertDuration(recette.preparation, recette.cuisson)}</p>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default RecettesList;
