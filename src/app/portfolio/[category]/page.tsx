"use client";

import React from "react";
import styles from "./category.module.scss";
import Image from "next/image";
import { Items, items } from "./data";
import { notFound } from "next/navigation";
import Button from "@/compoments/Button/Button";

const getData = (cat: number) => {
  const data: any = items[cat];
  console.log("data", data[2].title);

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }: any) => {
  const data = getData(params.category);
  // console.log("data", data[2].title);
  return (
    <div className={styles.category}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item: Items) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
