import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
// import itemshopcard from "./itemshopcard.png";
import BattleRoyaleNews from "./BattleRoyaleNews";
import ItemShopUpdates from "./ItemShopUpdates";
import Home from "./Home";
import DataFetcher from "./DataFetcher";

export default function App() {
  return (
    <>
      <DataFetcher />
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ItemShopUpdates" element={<ItemShopUpdates />} />
            <Route path="/BattleRoyaleNews" element={<BattleRoyaleNews />} />
          </Routes>
        </Router>
        <DataFetcher />
      </div>
    </>
    /* <div align="center">
        <img src={itemshopcard} width="500em" alt="fortnite image"></img>
      </div> */
  );
}
