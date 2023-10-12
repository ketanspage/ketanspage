import React, { useState } from "react";
import { Content } from "../data/content";
import { StrictMode } from "react";
import Layout from "../components/header";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";
import Footer from "../components/footer";
import FilterMenu from "../components/filtermenu";

function Chat() {
  const about = Content.filter((item) => item.category === "about");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          
        </p>
        <iframe
	src="https://ketangandhi-my-bot.hf.space"
	frameborder="0"
	width="1300"
	height="800"
></iframe>

      </div>
      <Footer />
    </div>
  );
}
export default Chat;

