import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Resize from "@/pages/resize";
import ImageContextProvider from "./contexts/images-context";

export default function AppRouter() {
  return (
    <Router>
      <ImageContextProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resize" element={<Resize />} />
        </Routes>
      </ImageContextProvider>
    </Router>
  );
}
