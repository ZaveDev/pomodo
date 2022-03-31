import React from "react";
import "./home.css";
import { Buttons, Timer, StopGoButton } from "../components";
export default function Home() {
  return (
    <div className="container">
      <div className="timer-container">
        <Timer />
      </div>
      <div className="stop-go-container">
        <StopGoButton />
      </div>
      <div className="types-container">
        <Buttons label="Pomo" inputType="pomo" />
        <Buttons label="Quick Break" inputType="qBreak" />
        <Buttons label="Long Break" inputType="lBreak" />
      </div>
    </div>
  );
}
