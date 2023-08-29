"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./portfolio.module.scss";
import PortfolioList from "../others/PortfolioList";
import {
  featuredPortfolio,
  webAppPortfolio,
  networkingPortfolio,
  apiPortfolio,
  scriptingPortfolio,
} from "../../data";
import { PortfolioDataType } from "@/types";

const Portfolio = () => {
  const [selected, setSelected] = useState<string>("featured");
  const [data, setData] = useState<Array<PortfolioDataType>>([]);

  const listSegment = [
    { id: "featured", name: "Featured" },
    { id: "webapp", name: "Web App" },
    { id: "networking", name: "Networking" },
    { id: "api", name: "API" },
    { id: "scripting", name: "Scripting" },
  ];

  const handleSelect = (id: string) => {
    setSelected(id);
  };

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webapp":
        setData(webAppPortfolio);
        break;
      case "networking":
        setData(networkingPortfolio);
        break;
      case "api":
        setData(apiPortfolio);
        break;
      case "scripting":
        setData(scriptingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div id="portfolio" className={styles.portfolio}>
      <h1 className={styles.title}>Portfolio</h1>

      <ul className={styles.header}>
        {listSegment.map((item) => (
          <PortfolioList
            key={item.id}
            id={item.id}
            title={item.name}
            active={item.id === selected}
            onSelect={handleSelect}
          />
        ))}
      </ul>

      <div className={styles.container}>
        {data.map((item) => (
          <div className={styles.item} key={item.id}>
            <Image
              src={item.img}
              className={styles.img}
              width={300}
              height={300}
              alt={item.title}
            />
            <h3 className={styles.label}>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
