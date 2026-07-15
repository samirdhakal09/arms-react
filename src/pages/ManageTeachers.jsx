import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function ManageTeachers() {

    const [teachers, setTeachers] = useState([

        {
            id: 1,
            name: "Ram Sharma",
            email: "ram@gmail.com",
            phone: "9811111111",
            department: "Computer"
        },

        {
            id: 2,
            name: "Hari KC",
            email: "hari@gmail.com",
            phone: "9822222222",
            department: "BCA"
        },

        {
            id: 3,
            name: "Sita Nepal",
            email: "sita@gmail.com",
            phone: "9833333333",
            department: "BBA"
        }

    ]);

    const [editingTeacher, setEditingTeacher] = useState(null);

    const handleChange = (e) => {

        setEditingTeacher({

            ...editingTeacher,

            [e.target.name]: e.target.value

        });

    };

    const saveChanges = () => {

        setTeachers(

            teachers.map((teacher) =>

                teacher.id === editingTeacher.id

                    ? editingTeacher

                    : teacher

            )

        );

        alert("Teacher Updated Successfully");

        setEditingTeacher(null);

    };

    const deleteTeacher = (id) => {

        if (window.confirm("Delete this teacher?")) {

            setTeachers(

                teachers.filter((teacher) => teacher.id !== id)

            );

        }

    };

    return (

        <>

            <Sidebar />

            <div className="main">

                <Navbar />

                <div className="container mt-4">

                    <div className="card shadow">

                        <div className="card-header bg-success text-white">

                            <h3>Manage Teachers</h3>

                        </div>

                        <div className="card-body">

                            <table className="table table-bordered table-hover">

                                <thead>

                                    <tr>

                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Department</th>
                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {teachers.map((teacher) => (

                                        <tr key={teacher.id}>

                                            <td>{teacher.id}</td>

                                            <td>{teacher.name}</td>

                                            <td>{teacher.email}</td>

                                            <td>{teacher.phone}</td>

                                            <td>{teacher.department}</td>

                                            <td>

                                                <button
                                                    className="btn btn-warning btn-sm me-2"
                                                    onClick={() =>
                                                        setEditingTeacher(teacher)
                                                    }
                                                >
                                                    Edit
                                                </button>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() =>
                                                        deleteTeacher(teacher.id)
                                                    }
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

                    {editingTeacher && (

                        <div className="card shadow mt-4">

                            <div className="card-header bg-primary text-white">

                                <h4>Edit Teacher</h4>

                            </div>

                            <div className="card-body">

                                <div className="mb-3">

                                    <label>Name</label>

                                    <input
                                        className="form-control"
                                        name="name"
                                        value={editingTeacher.name}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        className="form-control"
                                        name="email"
                                        value={editingTeacher.email}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Phone</label>

                                    <input
                                        className="form-control"
                                        name="phone"
                                        value={editingTeacher.phone}
                                        onChange={handleChange}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Department</label>

                                    <select
                                        className="form-control"
                                        name="department"
                                        value={editingTeacher.department}
                                        onChange={handleChange}
                                    >
                                        <option>Computer</option>
                                        <option>BCA</option>
                                        <option>BBA</option>
                                        <option>BHM</option>
                                    </select>

                                </div>

                                <button
                                    className="btn btn-success me-2"
                                    onClick={saveChanges}
                                >
                                    Save
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setEditingTeacher(null)}
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

export default ManageTeachers;