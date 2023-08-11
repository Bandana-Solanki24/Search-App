// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import All from "./component/All";
import Cakes from "./component/Cakes";
import Chocolates from "./component/Chocolates";
import IceCreams from "./component/IceCreams";
import Doughnuts from "./component/Doughnuts";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/iceCreams" element={<IceCreams />} />
        <Route path="/chocolates" element={<Chocolates />} />
        <Route path="/doughnuts" element={<Doughnuts />} />
      </Routes>
    </Router>
  );
}

export default App;
