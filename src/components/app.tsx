import { Routes, Route } from "react-router-dom";
import PageOne from "../pages/PageOne";
import PageTwo from "../pages/PageTwo";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageOne />} />
      <Route path="/two" element={<PageTwo />} />
    </Routes>
  );
};
