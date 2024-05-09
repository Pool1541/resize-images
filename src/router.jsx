import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "@/pages/home";
import Resize from "@/pages/resize";
import ImageContextProvider from "./contexts/images-context";
import LabelsContextProvider from "./contexts/labels-context";

export default function AppRouter() {
  return (
    <Router basename="/resize-images/">
      <ImageContextProvider>
        <LabelsContextProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resize" element={<Resize />} />
        </Routes>
        </LabelsContextProvider>
      </ImageContextProvider>
    </Router>
  );
}
