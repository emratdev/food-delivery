"use client";

import CountDown from "react-countdown";

const endingDate = new Date("2025-07-10")


export const Countdown = () => {
    return (
    
        <CountDown className="font-bold text-5xl text-yellow-300" date={endingDate}/>
    )
}