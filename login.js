// pages/login.js
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async () => {
    const { user, error } = await supabase.auth.signIn({ email });
    if (error) alert(error.message);
    else alert("Logged in successfully!");
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
