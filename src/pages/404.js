import React from "react";

export default function page_404(props) {
  // const URL = typeof window !== "undefined" ? window.location.href : "";

  console.log(`${(window.location = "https://www.google.com")}`);
  return <div>404 page not found</div>;
}
