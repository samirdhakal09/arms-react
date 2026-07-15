import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AdminDashboard() {

    return (

        <>
            <Sidebar />

            <div className="main">

                <Navbar />

                <div className="container-fluid mt-4">

                    <h2 className="mb-4">
                        Welcome, Admin 👋
                    </h2>

                    {/* Statistics */}

                    <div className="row">

                        <div className="col-md-4 mb-4">

                            <Link to="/manage-teachers" className="text-decoration-none">

                                <div className="card shadow top-card bg-primary text-white">

                                    <div className="card-body text-center">

                                        <h5>Total Teachers</h5>

                                        <h1>20</h1>

                                        <small>Click to View</small>

                                    </div>

                                </div>

                            </Link>

                        </div>

                        <div className="col-md-4 mb-4">

                            <Link to="/manage-subjects" className="text-decoration-none">

                                <div className="card shadow top-card bg-success text-white">

                                    <div className="card-body text-center">

                                        <h5>Total Subjects</h5>

                                        <h1>12</h1>

                                        <small>Click to View</small>

                                    </div>

                                </div>

                            </Link>

                        </div>

                        <div className="col-md-4 mb-4">

                            <Link to="/manage-departments" className="text-decoration-none">

                                <div className="card shadow top-card bg-warning">

                                    <div className="card-body text-center">

                                        <h5>Departments</h5>

                                        <h1>5</h1>

                                        <small>Click to View</small>

                                    </div>

                                </div>

                            </Link>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-md-4 mb-4">

                            <Link to="/students" className="text-decoration-none">

                                <div className="card shadow top-card bg-info text-white">

                                    <div className="card-body text-center">

                                        <h5>Total Students</h5>

                                        <h1>120</h1>

                                        <small>Click to View</small>

                                    </div>

                                </div>

                            </Link>

                        </div>

                        <div className="col-md-4 mb-4">

                            <Link to="/reports" className="text-decoration-none">

                                <div className="card shadow top-card bg-danger text-white">

                                    <div className="card-body text-center">

                                        <h5>Pending Results</h5>

                                        <h1>18</h1>

                                        <small>Click to View</small>

                                    </div>

                                </div>

                            </Link>

                        </div>

                        <div className="col-md-4 mb-4">

                            <Link to="/reports" className="text-decoration-none">

                                <div className="card shadow top-card bg-dark text-white">

                                    <div className="card-body text-center">

                                        <h5>Published Results</h5>

                                        <h1>102</h1>

                                        <small>Click to View</small>

                                    </div>

                                </div>

                            </Link>

                        </div>

                    </div>

                    {/* Notifications */}

                    <div className="row">

                        <div className="col-md-6 mb-4">

                            <div className="card shadow">

                                <div className="card-header bg-primary text-white">

                                    <h5 className="mb-0">

                                        Recent Notifications

                                    </h5>

                                </div>

                                <div className="card-body">

                                    <ul className="list-group">

                                        <li className="list-group-item">
                                            ✅ Teacher Ram Sharma added successfully
                                        </li>

                                        <li className="list-group-item">
                                            ✅ Database Management subject updated
                                        </li>

                                        <li className="list-group-item">
                                            ✅ Department BCA created
                                        </li>

                                        <li className="list-group-item">
                                            ✅ Semester Result Published
                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-6 mb-4">

                            <div className="card shadow">

                                <div className="card-header bg-success text-white">

                                    <h5 className="mb-0">

                                        System Status

                                    </h5>

                                </div>

                                <div className="card-body">

                                    <table className="table">

                                        <tbody>

                                            <tr>

                                                <th>Database</th>

                                                <td className="text-success">

                                                    🟢 Connected

                                                </td>

                                            </tr>

                                            <tr>

                                                <th>Server</th>

                                                <td className="text-success">

                                                    🟢 Running

                                                </td>

                                            </tr>

                                            <tr>

                                                <th>Academic Year</th>

                                                <td>

                                                    2026

                                                </td>

                                            </tr>

                                            <tr>

                                                <th>Semester</th>

                                                <td>

                                                    Spring

                                                </td>

                                            </tr>

                                            <tr>

                                                <th>Version</th>

                                                <td>

                                                    ARMS v1.0

                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AdminDashboard;