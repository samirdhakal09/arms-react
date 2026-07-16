import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { addTeacher } from "../api/teacherApi";

function AddTeacher() {

    const [teacher, setTeacher] = useState({
        fullname: "",
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

    async function saveTeacher(e) {

        e.preventDefault();

        try {

            await addTeacher(teacher);

            alert("Teacher Added Successfully ✅");

            setTeacher({
                fullname: "",
                email: "",
                phone: "",
                department: ""
            });

        } catch (error) {

            console.error(error);

            alert("Failed to Add Teacher ❌");

        }

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

                                    <label className="form-label">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="fullname"
                                        value={teacher.fullname}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

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

                                    <label className="form-label">
                                        Phone
                                    </label>

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

                                    <label className="form-label">
                                        Department
                                    </label>

                                    <select
                                        className="form-control"
                                        name="department"
                                        value={teacher.department}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select Department
                                        </option>

                                        <option value="Computer">
                                            Computer
                                        </option>

                                        <option value="BCA">
                                            BCA
                                        </option>

                                        <option value="BBA">
                                            BBA
                                        </option>

                                        <option value="BHM">
                                            BHM
                                        </option>

                                    </select>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
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