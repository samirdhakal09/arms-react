import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { addSubject } from "../api/subjectApi";

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

    async function saveSubject(e) {

        e.preventDefault();

        try {

            await addSubject(subject);

            alert("Subject Added Successfully ✅");

            setSubject({
                code: "",
                name: "",
                semester: "",
                department: ""
            });

        } catch (error) {

            console.error(error);

            alert("Failed to Add Subject ❌");

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

                            <h3>Add Subject</h3>

                        </div>

                        <div className="card-body">

                            <form onSubmit={saveSubject}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Subject Code
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="code"
                                        value={subject.code}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Subject Name
                                    </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={subject.name}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Semester
                                    </label>

                                    <select
                                        className="form-control"
                                        name="semester"
                                        value={subject.semester}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select Semester
                                        </option>

                                        <option value="1st">1st</option>
                                        <option value="2nd">2nd</option>
                                        <option value="3rd">3rd</option>
                                        <option value="4th">4th</option>
                                        <option value="5th">5th</option>
                                        <option value="6th">6th</option>
                                        <option value="7th">7th</option>
                                        <option value="8th">8th</option>

                                    </select>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Department
                                    </label>

                                    <select
                                        className="form-control"
                                        name="department"
                                        value={subject.department}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">
                                            Select Department
                                        </option>

                                        <option value="BCA">BCA</option>
                                        <option value="BBA">BBA</option>
                                        <option value="BHM">BHM</option>

                                    </select>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-success"
                                >
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