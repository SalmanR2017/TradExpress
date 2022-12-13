import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar1 from "./Components/Navbar1";
import LandingPage from "./Pages/LandingPage";
import GetStarted from "./Pages/GetStarted";
import Login from "./Pages/Login";
import Buy from "./Pages/Buy";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("i ran");
    // https://api.coinlore.net/api/tickers/?start=0&limit=5

    const getData = async (url) => {
      let response = await fetch(url);
      let dataGotten = await response.json();
      console.log(dataGotten);
      setData(dataGotten.data)
      console.log(dataGotten.data);

    };
 
    getData("https://api.coinlore.net/api/tickers/?start=0&limit=5");
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<LandingPage newData={data} />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
