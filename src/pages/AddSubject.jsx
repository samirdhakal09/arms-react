import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

function AddSubject() {

    const [subject, setSubject] = useState({
        code: "",
        name: "",
        semester: "",
        department: ""
    });

    function handleChange(e) {

        setSubject({
            ...subject,
            [e.target.name]: e.target.value
        });

    }

    function saveSubject(e) {

        e.preventDefault();

        alert("Subject Added Successfully");

        console.log(subject);

        setSubject({
            code: "",
            name: "",
            semester: "",
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

                            <h3>Add Subject</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={saveSubject}>

                                <div className="mb-3">

                                    <label>Subject Code</label>

                                    <input
                                        type="text"
                                        name="code"
                                        className="form-control"
                                        value={subject.code}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Subject Name</label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={subject.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Semester</label>

                                    <select
                                        name="semester"
                                        className="form-control"
                                        value={subject.semester}
                                        onChange={handleChange}
                                    >

                                        <option value="">Choose Semester</option>

                                        <option>1st</option>
                                        <option>2nd</option>
                                        <option>3rd</option>
                                        <option>4th</option>
                                        <option>5th</option>
                                        <option>6th</option>
                                        <option>7th</option>
                                        <option>8th</option>

                                    </select>

                                </div>

                                <div className="mb-3">

                                    <label>Department</label>

                                    <select
                                        name="department"
                                        className="form-control"
                                        value={subject.department}
                                        onChange={handleChange}
                                    >

                                        <option value="">Choose Department</option>

                                        <option>BCA</option>
                                        <option>BBA</option>
                                        <option>BHM</option>

                                    </select>

                                </div>

                                <button className="btn btn-success">

                                    Save Subject

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default AddSubject;