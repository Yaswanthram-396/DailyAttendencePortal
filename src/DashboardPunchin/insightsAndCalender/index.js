import React, { useEffect, useState } from "react";
import "./index.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import LineGraphVictory from "./graph";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
// import "../../../public/images/Frame.svg"

// export function DatePickerValue() {
//   const [value, setValue] = useState(dayjs("2022-04-17"));

//   return (
//     <div className="mobile-calender">
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <div>
//           <DemoContainer
//             components={[
//               "DatePicker",
//               "MobileDatePicker",
//               "DesktopDatePicker",
//               "StaticDatePicker",
//             ]}
//           >
//             {/* <DemoItem>
//               <MobileDatePicker
//                 defaultValue={dayjs("2022-04-17")}
//                 format="DD/MM/YY"
//               />
//             </DemoItem> */}
//             <DemoItem>
//               <DatePicker
//                 defaultValue={dayjs("2022-04-17")}
//                 format="DD/MM/YY"
//               />
//             </DemoItem>
//           </DemoContainer>
//         </div>
//       </LocalizationProvider>
//     </div>
//   );
// }
export function DatePickerValue() {
  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <div className="mobile-calendar">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          format="DD MMM YYYY ddd"
          slotProps={{
            textField: {
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#A7D3F2",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196F3",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#2196F3",
                },
              },
              InputProps: {
                endAdornment: (
                  <img
                    src="/images/Frame.svg"
                    alt="Calendar Icon"
                    style={{
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                  />
                ),
              },
            },
            popper: {
              sx: {
                zIndex: 1300, // Ensure the calendar appears on top
              },
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export function AddWeekNumber() {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Automatically update the calendar date daily
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(dayjs());
    }, 1000 * 60 * 60 * 24); // Update every 24 hours

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Disable previous dates
  const disablePreviousDates = (date) => date.isBefore(dayjs(), "day");

  // Customize today's date appearance
  const customDayRender = (day, selectedDates, pickersDayProps) => {
    const isToday = day.isSame(dayjs(), "day");

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
    <>
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
      <DatePickerValue />
    </>
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
