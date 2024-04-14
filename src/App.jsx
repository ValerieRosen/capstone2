import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import BattleRoyaleNews from "./BattleRoyaleNews";
import ItemShopUpdates from "./ItemShopUpdates";
import Home from "./Home";

export default function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ItemShopUpdates" element={<ItemShopUpdates />} />
            <Route path="/BattleRoyaleNews" element={<BattleRoyaleNews />} />
          </Routes>
          <div></div>
        </Router>
      </div>
    </>
  );
}
