"use client";
import React, { useState, useEffect } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Elevator() {
  const [currentFloor, setCurrentFloor] = useState(1); // Tracks elevator's current floor
  const [pressedButtons, setPressedButtons] = useState([]); // Tracks all requested floors with direction
  const [upRequests, setUpRequests] = useState([]); // Sorted floors for upward movement
  const [downRequests, setDownRequests] = useState([]); // Sorted floors for downward movement
  const [moving, setMoving] = useState(false); // Status of elevator movement
  const [priorityDirection, setPriorityDirection] = useState(null); // Direction priority based on first press

  const floors = [9, 8, 7, 6, 5, 4, 3, 2, 1]; // Available floors

  // Handle button press for each floor and direction
  const handleOutsidePress = (direction, floor) => {
    // Avoid duplicate requests for the same floor and direction
    if (!pressedButtons.some((btn) => btn.floor === floor && btn.direction === direction)) {
      setPressedButtons((prev) => [...prev, { floor, direction }]);

      // Set initial priority direction on first button press
      if (priorityDirection === null) {
        setPriorityDirection(direction === 0 ? "up" : "down");
      }
    }
  };




  // Separate and sort up/down requests when button presses are updated
  useEffect(() => {
    const upReq = pressedButtons
      .filter((req) => req.direction === 0)
      .map((req) => req.floor)
      .sort((a, b) => a - b);

    const downReq = pressedButtons
      .filter((req) => req.direction === 1)
      .map((req) => req.floor)
      .sort((a, b) => b - a);

    setUpRequests(upReq);
    setDownRequests(downReq);
  }, [pressedButtons]);



  // Move elevator based on priority direction and requests
  useEffect(() => {
    const moveElevator = async () => {
      setMoving(true);

      // Function to process each floor in a list with a pause on each
      const processFloors = async (floors, direction) => {
        for (const floor of floors) {
          setCurrentFloor(floor);
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Pause for 2 seconds on each floor

          // Remove processed floor from the request list
          setPressedButtons((prev) =>
            prev.filter((btn) => !(btn.floor === floor && btn.direction === (direction === "up" ? 0 : 1)))
          );
        }
      };

      // Step 1: Process prioritized floors first
      if (priorityDirection === "up" && upRequests.length > 0) {
        await processFloors(upRequests, "up");
        await new Promise((resolve) => setTimeout(resolve, 4000)); // 4-second pause at final up floor
      } else if (priorityDirection === "down" && downRequests.length > 0) {
        await processFloors(downRequests, "down");
        await new Promise((resolve) => setTimeout(resolve, 4000)); // 4-second pause at final down floor
      }

      // Step 2: Process remaining floors in the alternate direction
      if (priorityDirection === "up" && downRequests.length > 0) {
        await processFloors(downRequests, "down");
      } else if (priorityDirection === "down" && upRequests.length > 0) {
        await processFloors(upRequests, "up");
      }

      // Step 3: Return to the ground floor after completing all requests
      setCurrentFloor(1);
      setMoving(false);
    };

    // Start elevator movement if there are requests and it's not already moving
    if (!moving && (upRequests.length > 0 || downRequests.length > 0)) {
      moveElevator();
    }
  }, [upRequests, downRequests, priorityDirection, moving]);






  return (
    <>
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          {floors.map((floor, index) => (
            <div
              key={index}
              style={{
                height: "100px",
                width: "130px",
                border: "solid red",
                textAlign: "center",
                marginBottom: "14px",
              }}
            >
              <p>{floor === 9 ? "Top" : ""} Floor: {floor}</p>
              <button
                className="button3"
                onClick={() => handleOutsidePress(0, floor)} // Up button
              >
                <ArrowUpwardIcon />
              </button>
              <br />
              <button
                className="button3"
                onClick={() => handleOutsidePress(1, floor)} // Down button
              >
                <ArrowDownwardIcon />
              </button>
            </div>
          ))}
        </div>

        {/* Display elevator's current floor */}
        <div>
          {floors.map((floor, index) => (
            <div
              key={index}
              style={{
                height: "95px",
                width: "130px",
                border: "solid black",
                textAlign: "center",
                marginTop: "15px",
                backgroundColor: currentFloor === floor ? "#636b74" : "",
              }}
            >
              <p>Floor No {floor}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Elevator;
