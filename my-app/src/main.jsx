import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Fragment } from "react";

import Header from "./header.jsx";
// import MainContent from './mainContent.jsx'
// import Footer from './footer.jsx'
import Entry from "./Entry.jsx";
import data from "./data.js";

const root = createRoot(document.getElementById("root"));

function Page() {
  const entryElements = data.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Header />
      {entryElements}
    </>
  );
}

root.render(<Page />);

export default Page;
