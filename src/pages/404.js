import React from "react";
import { Link } from "gatsby";
export default function page_404(props) {
  new Function(`window.location = "https://www.google.com";`)();

  // console.log(`${(window.location = "https://www.google.com")}`);
  return <div>404 page not found</div>;
}
