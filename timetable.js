// pages/timetable.js
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Timetable() {
  const [timetable, setTimetable] = useState([]);
  
  useEffect(() => {
    // Fetch timetable data from the database
    async function fetchTimetable() {
      const { data, error } = await supabase.from('periods').select('*');
      if (error) console.error(error);
      else setTimetable(data);
    }
    
    fetchTimetable();
  }, []);
  
  return (
    <div>
      <h2>My Timetable</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Day</th>
          </tr>
        </thead>
        <tbody>
          {timetable.map((period) => (
            <tr key={period.id}>
              <td>{period.start_time} - {period.end_time}</td>
              <td>{period.subject}</td>
              <td>{period.class_id}</td>
              <td>{period.day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
