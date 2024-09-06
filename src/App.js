import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
