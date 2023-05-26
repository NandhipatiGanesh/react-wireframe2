import "../src/index.css";
import Header from "../src/components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import 'atropos/css';




function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route index path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
