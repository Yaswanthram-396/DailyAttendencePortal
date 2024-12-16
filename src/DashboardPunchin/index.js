import InsightsCard, { AddWeekNumber } from "./insightsAndCalender";
import "./index.css";
// import { HiGif } from "../Sidebar";
import { useEffect, useState } from "react";
function DashboardPunchin() {
  const [punchin, setPunchin] = useState(false);
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
  function PunchIn() {
    return (
      <div className="punchin">
        <div className="PunchInImages">
          <img alt="Punch in" src="/images/final-PunchIn.jpg" />
          <p className="PunchInText">{animatedText}</p>
        </div>
        <div className="punchin-button-container">
          <button
            className="punchin-button"
            style={{
              background:
                " var(--g, linear-gradient(180deg, #94D145 0%, #52B623 100%))",
            }}
            onClick={() => setPunchin(!punchin)}
          >
            Punch In
          </button>
        </div>
      </div>
    );
  }
  function Punchout() {
    const [note, setNote] = useState(localStorage.getItem("note") || "");
    useEffect(() => {
      localStorage.setItem("note", note);
    }, [note]);

    const handlePunchout = () => {
      setPunchin(false);
      setNote(""); // Clear the note
      localStorage.removeItem("note"); // Remove note from localStorage
    };

    console.log(note);
    return (
      <div className="punchin">
        <div className="PunchInImages">
          <img alt="Punch in" src="/images/final-PunchIn.jpg" />
          <p className="PunchInText">{animatedText}</p>
        </div>
        <input
          type="text"
          placeholder="Note of the day."
          onChange={(e) => setNote(e.target.value)}
          value={note}
          style={{
            borderRadius: " 4px",
            border: " 1px solid var(--D-4, #5A91CB)",
            background: "#FBFEFF",
            padding: "10px",
            width: "40%",
          }}
        />
        <div className="punchin-button-container">
          <button
            className="punchin-button"
            style={{
              background: " red",
            }}
            onClick={handlePunchout}
          >
            Punch Out
          </button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ height: "91vh", overflowY: "scroll" }}>
      <InsightsCard />
      <div className="punchin-container">
        <AddWeekNumber />
        {!punchin ? <PunchIn /> : <Punchout />}
      </div>
    </div>
  );
}
export default DashboardPunchin;
