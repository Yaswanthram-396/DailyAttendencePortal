import InsightsCard, { AddWeekNumber } from "./insightsAndCalender";
import "./index.css";
// import { HiGif } from "../Sidebar";
import { useEffect, useState } from "react";
function DashboardPunchin() {
  function PunchIn() {
    const messages = [
      "Start your day with Smile 😄",
      "Make today amazing! 🌟",
      "New day, new opportunities! 🌈",
      "Stay positive and productive! 💪",
      "Keep shining bright! 🌞",
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const [animatedText, setAnimatedText] = useState("");

    useEffect(() => {
      let index = 0;

      const interval = setInterval(() => {
        setAnimatedText((prev) => prev + randomMessage[index]);
        index++;

        if (index >= randomMessage.length) {
          clearInterval(interval);
        }
      }, 90);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className="punchin">
        <div className="PunchInImages">
          <img alt="Punch in" src="/images/final-PunchIn.jpg" />
          <p className="PunchInText">{animatedText}</p>
        </div>
        <div className="punchin-button-container">
          <button className="punchin-button">Punch In</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: "91vh", overflowY: "scroll" }}>
      <InsightsCard />
      <div className="punchin-container">
        <AddWeekNumber />
        <PunchIn />
      </div>
    </div>
  );
}
export default DashboardPunchin;
