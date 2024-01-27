import React from "react";
import NavBar from "./NavBar";
import "../styles/callforpaper.css";
import papers from "../utils/data";

function CallForPaperCFP() {
  return (
    <div className="callforpaperContainer">
      <NavBar />
      <h2><u>Call For Papers</u></h2>
      <div className="cfpbox">
        {papers.map((paper) => (
          <div className="cfp" key={paper.id}>
            <h3>{paper.title}</h3>
            <h4>{paper.description}</h4>
            <ul>
              {paper.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CallForPaperCFP;
