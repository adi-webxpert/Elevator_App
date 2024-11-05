"use client";
import React, { useEffect, useState } from "react";
import PopUp from "./PopUp";
import Elevator from "@/app/elevator/page";

function Homepage() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Front-end Developer | React | Next.js | CSS | JavaScript</p>
      </header>

      <Elevator />

      <footer style={{ textAlign: "center", marginTop: "50px" }}>
        <p>&copy; 2024 Nitin | Front-end Developer</p>
      </footer>
    </div>
  );
}

export default Homepage;
