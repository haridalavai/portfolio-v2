import React from "react";
import { Chrono } from "react-chrono";
import items from "./data";

const Timeline = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        cardWidth={500}
        cardHeight={300}
        contentDetailsHeight={250}
        fontSizes={{
          title: "1rem",
        }}
        enableDarkToggle
      />
    </div>
  );
};

export default Timeline;
