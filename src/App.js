import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./users/AddUser";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addUser" element={<AddUser />}></Route>
          <Route exact path="/editUser/:id" element={<EditUser />}></Route>
          <Route exact path="/viewUser/:id" element={<ViewUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
