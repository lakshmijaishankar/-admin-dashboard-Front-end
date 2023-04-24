import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/navbar.css"
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Addemployee from "./components/Addemployee";
import Searchemployee from "./components/Searchemployee";
import Deleteemployee from "./components/Deleteemployee";
import Employee from "./components/Employee";
import Adminlogin from "./components/Adminlogin";
function App() {
  return (
    <div class="main bg-light">
      <BrowserRouter>
        <Navbar />
        <div class="dashboard" >
          <Dashboard />
          <Routes>
            <Route path="/" element={<Adminlogin/>} />
            <Route path="/getallemployee" element={<Employee/>}/>
            <Route path="/addemp" element={<Addemployee/>} />
            <Route path="/search/:empsearch" element={<Searchemployee/>} />
            <Route path="/deleteEmp" element={<Deleteemployee/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
