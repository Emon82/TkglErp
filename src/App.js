import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Page/About/About";
import Home from "./Page/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/we" element={<About />} />
          {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
