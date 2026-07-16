import { Link } from "react-router-dom";
import Logout from "./Logout";

function Sidebar() {
  return (
    <div className="sidebar">

      <h3>ARMS Admin</h3>

      <Link to="/admin-dashboard">🏠 Dashboard</Link>

      <hr />

      <h6>Teacher</h6>

      <Link to="/add-teacher">➕ Add Teacher</Link>

      <Link to="/manage-teachers">
        👨‍🏫 Manage Teachers
      </Link>

      <hr />

      <h6>Subject</h6>

      <Link to="/add-subject">
        📘 Add Subject
      </Link>

      <Link to="/manage-subjects">
        📚 Manage Subjects
      </Link>

      <hr />

      <h6>Department</h6>

      <Link to="/add-department">
        🏢 Add Department
      </Link>

      <Link to="/manage-departments">
        🏫 Manage Departments
      </Link>

      <hr />

      <Link to="/reports">
        📊 Reports
      </Link>

      <hr />

      <Logout />

    </div>
  );
}

export default Sidebar;