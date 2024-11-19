import React from "react";

const InsightsCard = () => {
  return (
    <div
      style={{
        width: "34%",
        height: "20vh",
        backgroundColor: "rgb(247, 251, 255)",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        /* box-shadow: rgba(0, 0, 0, 0.1) 0px 2px "5px", */
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        borderRadius: "12px",
        border: " 1px solid var(--L-6, #C6E6FB)",
        background: "#FFF",
        boxShadow: "0px 1px 4px 0px rgba(88, 134, 166, 0.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Insights</span>
        <div
          style={{
            borderRadius: "12px",
            padding: "4px",
            border: "1px solid var(--L-6, #C6E6FB)",
            background: "#FFF",
            boxShadow: "0px 1px 4px 0px rgba(88, 134, 166, 0.25)",
          }}
        >
          <select
            style={{
              border: "1px solid #fff",
              // borderRadius: "5px",
              padding: "5px 10px",
              backgroundColor: "#fff",
            }}
          >
            <option>2023</option>
          </select>
          <select
            style={{
              border: "1px solid #FFF",
              // borderRadius: "5px",

              padding: "5px 10px",
              backgroundColor: "#fff",
            }}
          >
            <option>February</option>
          </select>
        </div>
      </div>
      <div>
        <p style={{ fontSize: "14px", margin: "0 0 10px" }}>
          Attendance Percentage
        </p>
        <h1
          style={{ margin: "0 0 10px", fontSize: "36px", fontWeight: "bold" }}
        >
          65%
        </h1>
        <p style={{ margin: "0", color: "#ff4d4d", fontSize: "14px" }}>
          <span style={{ marginRight: "5px" }}>📉</span>-25% Compared to January
        </p>
      </div>
    </div>
  );
};

export default InsightsCard;
