import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import PageRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation>
        <PageRoutes />
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
