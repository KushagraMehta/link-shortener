import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";

export default function CheckLink() {
  const { urlLink } = useParams();
  console.log(urlLink);
  const [urlFound, SetUrlFound] = useState(false);

  useEffect(() => {
    //call database for urlLink
    //SetUrlFound
  }, []);
  useEffect(() => {
    window.location = "https://www.youtube.com/";
  }, [urlFound]);
  if (urlFound) console.log(urlFound);
  return (
    <React.Fragment>{urlFound ? <div /> : <PageNotFound />}</React.Fragment>
  );
}
