// pages/add-period.js
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AddPeriod() {
  const [subject, setSubject] = useState("");
  const [classId, setClassId] = useState("");
  const [day, setDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('periods').insert([
      {
        teacher_id: "example-teacher-id", // replace with actual user ID
        subject,
        class_id: classId,
        day,
        start_time: startTime,
        end_time: endTime
      }
    ]);

    if (error) alert("Error: " + error.message);
    else alert("Period added successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} />
      <input type="text" placeholder="Class ID" onChange={(e) => setClassId(e.target.value)} />
      <input type="text" placeholder="Day" onChange={(e) => setDay(e.target.value)} />
      <input type="time" placeholder="Start Time" onChange={(e) => setStartTime(e.target.value)} />
      <input type="time" placeholder="End Time" onChange={(e) => setEndTime(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
