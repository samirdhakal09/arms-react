import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";

function ManageDepartments() {

    const [departments, setDepartments] = useState([]);
    const [editing, setEditing] = useState(null);

    useEffect(() => {
        loadDepartments();
    }, []);

    async function loadDepartments() {
        try {
            const res = await axios.get("http://127.0.0.1:8000/departments/");
            setDepartments(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    function handleChange(e) {
        setEditing({
            ...editing,
            [e.target.name]: e.target.value
        });
    }

    function save() {
        alert("Update API will be added later.");
        setEditing(null);
    }

    function remove(id) {
        alert("Delete API will be added later.");
    }

    return (
        <>
            <Sidebar />

            <div className="main">

                <Navbar />

                <div className="container mt-4">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">

                            <h3>Manage Departments</h3>

                        </div>

                        <div className="card-body">

                            <table className="table table-bordered table-hover">

                                <thead>

                                    <tr>

                                        <th>ID</th>
                                        <th>Department Name</th>
                                        <th>Faculty</th>
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {departments.map((dep) => (

                                        <tr key={dep.id}>

                                            <td>{dep.id}</td>

                                            <td>{dep.name}</td>

                                            <td>{dep.faculty}</td>

                                            <td>

                                                <button
                                                    className="btn btn-warning btn-sm me-2"
                                                    onClick={() => setEditing(dep)}
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => remove(dep.id)}
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {editing && (

                        <div className="card shadow mt-4">

                            <div className="card-header bg-primary text-white">

                                <h4>Edit Department</h4>

                            </div>

                            <div className="card-body">

                                <div className="mb-3">

                                    <label>Department Name</label>

                                    <input
                                        className="form-control"
                                        name="name"
                                        value={editing.name}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Faculty</label>

                                    <input
                                        className="form-control"
                                        name="faculty"
                                        value={editing.faculty}
                                        onChange={handleChange}
                                    />

                                </div>

                                <button
                                    className="btn btn-success me-2"
                                    onClick={save}
                                >
                                    Save
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setEditing(null)}
                                >
                                    Cancel
                                </button>

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </>
    );

}

export default ManageDepartments;