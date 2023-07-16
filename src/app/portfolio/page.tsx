import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="selectTitle">Choose a gallery</h1>
      <div className="items">
        <Link href="/portfolio/illustrations" className="item">
          <span className="title">Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className="item">
          <span className="title">Websites</span>
        </Link>
        <Link href="/portfolio/application" className="item">
          <span className="title">Application</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
