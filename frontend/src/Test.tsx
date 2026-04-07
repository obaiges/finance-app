import { useState, useEffect } from "react";
import { api } from "./api";

function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/dbtest")
      .then((res: any) => setMessage(res.data))
      .catch((err: any) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div>
      <h1>Prueba Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default Test;