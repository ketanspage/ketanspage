import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function Chat() {
  /*const iframeRef = useRef(null);

  // Function to change iframe properties
  const changeIframeProperties = () => {
    if (iframeRef.current) {
      // Access the iframe contentDocument
      const iframeDocument = iframeRef.current.contentDocument;

      if (iframeDocument) {
        // Access elements inside the iframe and change their properties
        const iframeBody = iframeDocument.body;
        const iframeHeader = iframeDocument.getElementById("headerId");

        if (iframeHeader) {
          // Modify the properties of iframeHeader or other elements
          iframeHeader.style.backgroundColor = "red";
          iframeHeader.innerHTML = "New Header Text";
        }
      }
    }
  };

  // Use useEffect to change iframe properties after it loads
  useEffect(() => {
    changeIframeProperties();
  }, []); */
  // Inline CSS using template literals
  const styles = `
    .main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .all-results-container {
      
    }

    .result-count {
      font-size: 18px;
      font-weight: bold;
    }

    iframe {
      width: 100%;
      height: 800px;
      justify-content: between;
      align-items: center;
    }

    @media (max-width: 768px) {
      .result-count {
        font-size: 16px;
      }

      iframe {
        height: 600px;
      }
    }
  `;

  return (
    <div className="main" style={{ cssText: styles }}>
      <Header />
      <FilterMenu />
      <div className="">
        <p className="result-count">
          
        </p>
        <iframe
          src="https://ketangandhi-my-bot.hf.space"
          frameBorder="0"
          width="100%"
          height="800"
          
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Chat;

