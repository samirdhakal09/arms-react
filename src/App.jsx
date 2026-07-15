import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import AddTeacher from "./pages/AddTeacher";
import ManageTeachers from "./pages/ManageTeachers";

import AddSubject from "./pages/AddSubject";
import ManageSubjects from "./pages/ManageSubjects";

import AddDepartment from "./pages/AddDepartment";
import ManageDepartments from "./pages/ManageDepartments";

import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />

      <Route path="/add-teacher" element={<AddTeacher />} />

      <Route path="/manage-teachers" element={<ManageTeachers />} />

      <Route path="/add-subject" element={<AddSubject />} />

      <Route path="/manage-subjects" element={<ManageSubjects />} />

      <Route path="/add-department" element={<AddDepartment />} />

      <Route path="/manage-departments" element={<ManageDepartments />} />

      <Route path="/reports" element={<Reports />} />

    </Routes>
  );
}

export default App;