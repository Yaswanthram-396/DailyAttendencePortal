import React from "react";
import { VictoryChart, VictoryArea, VictoryAxis } from "victory";
import "./index.css";
const LineGraphVictory = () => {
  const data = [
    { x: 1, y: 20 },
    { x: 2, y: 35 },
    { x: 3, y: 50 },
    { x: 4, y: 44 },
    { x: 5, y: 33 },
    { x: 6, y: 59 },
    { x: 7, y: 75 },

  ];

  const isDecreasing = data[data.length - 1].y < data[0].y;

  return (
    <div className="graphContainer">

      <VictoryChart
        domainPadding={{ x: 10, y: 10 }}
        padding={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        {/* Remove the X and Y axis lines */}
        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" },
          }}
        />

        {/* Smooth area graph with animation */}
        <VictoryArea
          data={data}
          interpolation="catmullRom"
          animate={{
            onLoad: { duration: 250 }, // Start animation on load
            duration: 1000, // Animation duration for updates
            easing: "quadInOut", // Smooth easing function
          }}
          style={{
            data: {
              fill: `url(#gradient-${isDecreasing ? "red" : "green"})`,
              stroke: isDecreasing ? "red" : "limegreen",
              strokeWidth: 2,
            },
          }}
        />

        {/* Define gradient colors */}
        <defs>
          <linearGradient
            id={`gradient-${isDecreasing ? "red" : "green"}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor={isDecreasing ? "red" : "limegreen"}
              stopOpacity={0.4}
            />
            <stop
              offset="100%"
              stopColor={isDecreasing ? "red" : "limegreen"}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
      </VictoryChart>
    </div>
  );
};

export default LineGraphVictory;
