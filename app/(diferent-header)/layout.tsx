import Header from "@components/header/Header";
import React from "react";

const LayoutLogged = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header logged={true} />
      <main className="min-h-screen container mx-auto px-8">{children}</main>
    </>
  );
};

export default LayoutLogged;
