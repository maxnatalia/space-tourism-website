import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";

const App = () => {
  return (
    <BrowserRouter basename="/space-tourism-website">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
