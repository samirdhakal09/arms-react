import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

function AddTeacher() {

    const [teacher, setTeacher] = useState({
        name: "",
        email: "",
        phone: "",
        department: ""
    });

    function handleChange(e) {

        setTeacher({
            ...teacher,
            [e.target.name]: e.target.value
        });

    }

    function saveTeacher(e) {

        e.preventDefault();

        alert("Teacher Added Successfully");

        console.log(teacher);

        setTeacher({
            name: "",
            email: "",
            phone: "",
            department: ""
        });

    }

    return (

        <>

            <Sidebar />

            <div className="main">

                <Navbar />

                <div className="container mt-4">

                    <div className="card shadow">

                        <div className="card-header bg-primary text-white">

                            <h3>Add Teacher</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={saveTeacher}>

                                <div className="mb-3">

                                    <label>Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={teacher.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={teacher.email}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Phone</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phone"
                                        value={teacher.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Department</label>

                                    <select
                                        className="form-control"
                                        name="department"
                                        value={teacher.department}
                                        onChange={handleChange}
                                    >

                                        <option value="">Choose</option>

                                        <option>Computer</option>

                                        <option>BBA</option>

                                        <option>BHM</option>

                                        <option>BCA</option>

                                    </select>

                                </div>

                                <button className="btn btn-success">

                                    Save Teacher

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AddTeacher;