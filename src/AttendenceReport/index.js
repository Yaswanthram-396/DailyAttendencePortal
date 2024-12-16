import React, { useEffect } from "react";
import "./index.css";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// const attendanceData = [
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: null,
//     timeOut: null,
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Absent",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: null,
//     timeOut: null,
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Absent",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: null,
//     timeOut: null,
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Absent",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   {
//     date: "25-01-2023",
//     timeIn: "10:06 AM",
//     timeOut: "07:46 PM",
//     studentDetails: "Nitesh / 203221563",
//     phoneNumber: "268669659",
//     status: "Present",
//   },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },

//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "9:06 AM",
//   //   timeOut: "9:06 AM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: null,
//   //   timeOut: null,
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Absent",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "9:06 AM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: null,
//   //   timeOut: null,
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Absent",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "9:06 AM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: null,
//   //   timeOut: null,
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Absent",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "9:06 AM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: null,
//   //   timeOut: null,
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Absent",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "9:06 AM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: null,
//   //   timeOut: null,
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Absent",
//   // },
//   // {
//   //   date: "25-01-2023",
//   //   timeIn: "10:06 AM",
//   //   timeOut: "07:46 PM",
//   //   studentDetails: "Nitesh / 203221563",
//   //   phoneNumber: "268669659",
//   //   status: "Present",
//   // },
// ];
const attendanceData = [
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Attended a workshop on React.js development.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Participated in a group discussion about UI design trends.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Completed an assignment on database management systems.",
  },
  {
    date: "25-01-2023",
    timeIn: null,
    timeOut: null,
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Absent",
    note: "Missed due to a family function.",
  },
  {
    date: "25-01-2023",
    timeIn: null,
    timeOut: null,
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Absent",
    note: "Could not attend because of a health issue.",
  },
  {
    date: "25-01-2023",
    timeIn: null,
    timeOut: null,
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Absent",
    note: "Missed class to attend an important meeting.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Helped organize a coding challenge for peers.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Submitted a project report on IoT applications.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Participated in an online seminar about AI innovations.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Had a one-on-one discussion with the mentor about project ideas.",
  },
  {
    date: "25-01-2023",
    timeIn: "10:06 AM",
    timeOut: "07:46 PM",
    studentDetails: "Nitesh / 203221563",
    phoneNumber: "268669659",
    status: "Present",
    note: "Worked on improving problem-solving skills during a hackathon.",
  },
];

const AttendanceReport = () => {
  const [page, setPage] = useState(1); // State for the current page
  const today = new Date().toISOString().split("T")[0];
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default to 10

  // Function to update itemsPerPage based on screen width
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    setItemsPerPage(width < 800 ? 5 : 10);
  };

  // Run once on mount and listen to window resize
  useEffect(() => {
    updateItemsPerPage(); // Set initial value
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);
  // Calculate the records to display based on the current page
  const paginatedData = attendanceData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>Attendance Report</h3>
      <div className="attendance-report-filters">
        <div>
          <input
            type="text"
            placeholder="Search Name"
            style={{
              padding: "5px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            style={{
              padding: "5px 10px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-fields">
          {/* <select
            style={{
              padding: "5px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <option value="all">Status: All</option>
            <option value="present">Present</option>
            <option value="absent">Absent</option>
          </select> */}
          <div className="date-fields">
            <div className="Date-input">
              <label for="from-date">From Date</label>
              <input
                id="from-date"
                type="date"
                style={{
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div className="Date-input">
              <label htmlFor="to-date">To Date</label>
              <input
                id="to-date"
                type="date"
                defaultValue={today}
                max={today}
                style={{
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="attendanceReportTable">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "4px",
            fontWeight: "bold",
            display: "flex",
          }}
        >
          <div style={{ flex: "1", padding: "5px" }}>Date</div>
          <div style={{ flex: "1", padding: "5px" }}>Time In</div>
          <div style={{ flex: "1", padding: "5px" }}>Time Out</div>
          <div style={{ flex: "1", padding: "5px" }}>Note of that Day</div>
          {/* <div style={{ flex: "1", padding: "5px" }}>Phone Number</div>  */}
        </div>
        <div className="attendanceReportInMid-LgScreens">
          {paginatedData.map((record, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "14px 10px",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ flex: "1", padding: "5px" }}>{record.date}</div>
              <div style={{ flex: "1", padding: "5px" }}>
                {record.timeIn ? (
                  <span style={{ color: "green" }}>● {record.timeIn}</span>
                ) : (
                  <span style={{ color: "red" }}>● Absent</span>
                )}
              </div>
              <div style={{ flex: "1", padding: "5px" }}>
                {record.timeOut || "-"}
              </div>
              <div style={{ flex: "1", padding: "5px" }}>{record.note}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="attendanceReportTableMobile">
        <div
          // style={{ maxHeight: "53vh", overflowY: "auto" }}
          className="attendanceReportInsmallScreens"
        >
          {paginatedData.map((record, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                margin: "10px 0",
                borderRadius: "4px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "10px",
              }}
            >
              {/* Mobile-Friendly Layout */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <strong>Date:</strong> {record.date}
                </div>
                <div>
                  <strong>Time In:</strong>{" "}
                  {record.timeIn ? (
                    <span style={{ color: "green" }}>● {record.timeIn}</span>
                  ) : (
                    <span style={{ color: "red" }}>● Absent</span>
                  )}
                </div>
                <div>
                  <strong>Time Out:</strong> {record.timeOut || "-"}
                </div>
                <div>
                  <strong>Note:</strong> {record.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {attendanceData.length > itemsPerPage && (
        <Stack spacing={2} alignItems="center">
          {/* <div>
          <h3>Current Page: {page}</h3>
        </div> */}
          <Pagination
            count={Math.ceil(attendanceData.length / itemsPerPage)} // Total number of pages
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      )}
    </div>
  );
};

export default AttendanceReport;

// import React, { useState, useEffect } from "react";
// import "./index.css";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// const AttendanceReport = () => {
//   const [page, setPage] = useState(1); // State for the current page
//   const [attendanceData, setAttendanceData] = useState([]); // State for attendance data
//   const [totalPages, setTotalPages] = useState(1); // State for total pages
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state
//   const itemsPerPage = 5; // Number of records per page

//   // Fetch attendance data for the current page
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         // Replace with your actual API endpoint
//         const response = await fetch(
//           `https://api.example.com/attendance?page=${page}&limit=${itemsPerPage}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setAttendanceData(data.records); // Assuming `records` contains the list of attendance data
//         setTotalPages(data.totalPages); // Assuming `totalPages` contains the total number of pages
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [page]);

//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h3>Attendance Report</h3>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && (
//         <>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "20px",
//             }}
//           >
//             <div>
//               <input
//                 type="text"
//                 placeholder="Search Name"
//                 style={{
//                   padding: "5px",
//                   marginRight: "10px",
//                   border: "1px solid #ccc",
//                   borderRadius: "4px",
//                 }}
//               />
//               <button
//                 style={{
//                   padding: "5px 10px",
//                   backgroundColor: "#007BFF",
//                   color: "#fff",
//                   border: "none",
//                   borderRadius: "4px",
//                 }}
//               >
//                 Search
//               </button>
//             </div>
//             <select
//               style={{
//                 padding: "5px",
//                 marginRight: "10px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             >
//               <option value="all">Status: All</option>
//               <option value="present">Present</option>
//               <option value="absent">Absent</option>
//             </select>
//             <input
//               type="date"
//               style={{
//                 padding: "5px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//               }}
//             />
//           </div>

//           <div
//             style={{
//               backgroundColor: "#fff",
//               padding: "10px",
//               borderRadius: "4px",
//               fontWeight: "bold",
//               display: "flex",
//             }}
//           >
//             <div style={{ flex: "1", padding: "5px" }}>Date</div>
//             <div style={{ flex: "1", padding: "5px" }}>Time In</div>
//             <div style={{ flex: "1", padding: "5px" }}>Time Out</div>
//             <div style={{ flex: "1", padding: "5px" }}>Student Details</div>
//             <div style={{ flex: "1", padding: "5px" }}>Phone Number</div>
//           </div>

//           {attendanceData.map((record, index) => (
//             <div
//               key={index}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 borderBottom: "1px solid #ddd",
//                 padding: "10px",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <div style={{ flex: "1", padding: "5px" }}>{record.date}</div>
//               <div style={{ flex: "1", padding: "5px" }}>
//                 {record.timeIn ? (
//                   <span style={{ color: "green" }}>● {record.timeIn}</span>
//                 ) : (
//                   <span style={{ color: "red" }}>● Absent</span>
//                 )}
//               </div>
//               <div style={{ flex: "1", padding: "5px" }}>
//                 {record.timeOut || "-"}
//               </div>
//               <div style={{ flex: "1", padding: "5px" }}>
//                 {record.studentDetails}
//               </div>
//               <div style={{ flex: "1", padding: "5px" }}>
//                 {record.phoneNumber}
//               </div>
//             </div>
//           ))}

//           <Stack spacing={2} alignItems="center">
//             <Pagination
//               count={totalPages} // Use the total pages from API response
//               variant="outlined"
//               shape="rounded"
//               page={page}
//               onChange={handleChange}
//             />
//           </Stack>
//         </>
//       )}
//     </div>
//   );
// };

// export default AttendanceReport;
