import React from "react";
import '../../App.css'
export default function RoomCard({ fn, room }) {
  return (
    <div className="bg-[#45daad] bg-opacity-50 hover:bg-opacity-40 active:bg-opacity-20  sm:w-2 md:w-20 h-24 cursor-pointer rounded-xl p-2 chatnames" onClick={fn}>
      <span className="text-xl md:text-2xl font-bold opacity-60 ">{room}</span>
    </div>
  );
}
