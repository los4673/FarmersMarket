import React from "react";
import "./Container.css";

export const Container = ({ fluid, children }) => (
  <div 
  style={{opacity: 0.8}}
  className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);
