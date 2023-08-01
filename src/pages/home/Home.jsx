import React from "react";
import { Header } from "../../components/header/Header";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category";

export const Home = () => {
  return (
    <>
      <Category />
      <Card />
    </>
  );
};
