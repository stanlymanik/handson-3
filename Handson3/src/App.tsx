
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="floor">
        <p className="kiri">Hello world</p>
        <table border={1}>
          <tr>
            <th>Name</th>
            <th>Nim</th>
            <th>Address</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>Harry Stanly Manik</td>
            <td>2381007</td>
            <td>Unai</td>
            <td>2381007@unai.edu</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default App;
