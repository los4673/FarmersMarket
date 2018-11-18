import React from "react";

export const Col = ({ size, children }) => (
  <div 
  style={{paddingTop: 30}}
  className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>
);
