import React, { useEffect, useState } from "react";
import "./index.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";
import LineGraphVictory from "./graph";

export function AddWeekNumber() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Automatically update the calendar date daily
  useEffect(() => {
    const interval = setInterval(() => {
      const today = dayjs();
      setCurrentDate(today);
    }, 1000 * 60 * 60 * 24); // Every day

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Disable previous dates
  const disablePreviousDates = (date) => {
    const today = dayjs();
    return date.isBefore(today, "day");
  };

  // Customize today's date appearance
  const customDayRender = (day, selectedDates, pickersDayProps) => {
    const today = dayjs();
    const isToday = day.isSame(today, "day");

    return (
      <div
        {...pickersDayProps}
        style={{
          backgroundColor: isToday
            ? "#2196f3"
            : pickersDayProps.style?.backgroundColor,
          color: isToday ? "#fff" : pickersDayProps.style?.color,
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {day.date()}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{
          calendarWeekNumberHeaderText: "#",
          calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
        }}
      >
        <DateCalendar
          shouldDisableDate={disablePreviousDates}
          value={currentDate}
          onChange={(newDate) => setCurrentDate(newDate)}
          slotProps={{
            day: {
              renderDay: customDayRender,
            },
          }}
          slots={{
            switchViewButton: () => null,
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

const InsightsCard = () => {
  const currentYear = new Date().getFullYear();
  const years = [currentYear - 1, currentYear, currentYear + 1];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <div className="container">
        <div className="insights-header">
          <span className="insights-title">Insights</span>
          <div className="dropdown-container">
            <select className="dropdown">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select className="dropdown">
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="insights-card">
          <div className="insights-body">
            <h2 className="attendance-percentage">Attendance Percentage</h2>
            <div className="attendance-value-container">
              <div className="graphWithPercentage">
                <div>
                  <h2 className="attendance-month">February</h2>
                  <h1 className="attendance-value">65%</h1>
                </div>
                <LineGraphVictory />
              </div>
            </div>
            <p className="attendance-change">
              <span className="icon">📉</span>-25% Compared to January
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsightsCard;
