import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="index" element={<HomePage />} />
    </Routes>
  );
}

export default App;
