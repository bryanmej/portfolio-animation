import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
