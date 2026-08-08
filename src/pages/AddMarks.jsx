import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

function AddMarks() {

    const [subject, setSubject] = useState("");
    const [semester, setSemester] = useState("");

    const [errors, setErrors] = useState({});

    const [students, setStudents] = useState([

        {
            id: 1,
            roll: "BCA001",
            name: "Hari Sharma",
            internal: "",
            external: ""
        },

        {
            id: 2,
            roll: "BCA002",
            name: "Ram Karki",
            internal: "",
            external: ""
        },

        {
            id: 3,
            roll: "BCA003",
            name: "Sita Nepal",
            internal: "",
            external: ""
        }

    ]);

    function handleMarks(index, field, value) {

        const updated = [...students];

        updated[index][field] = value;

        setStudents(updated);

        // Remove error when user enters value
        setErrors((prev) => ({
            ...prev,
            [`${index}_${field}`]: ""
        }));

    }

    function validateForm() {

        const newErrors = {};

        // Subject validation
        if (!subject) {
            newErrors.subject = "This field is required";
        }

        // Semester validation
        if (!semester) {
            newErrors.semester = "This field is required";
        }

        // Student marks validation
        students.forEach((student, index) => {

            if (student.internal === "") {

                newErrors[`${index}_internal`] =
                    "This field is required";

            }

            if (student.external === "") {

                newErrors[`${index}_external`] =
                    "This field is required";

            }

            if (
                student.internal !== "" &&
                Number(student.internal) > 50
            ) {

                newErrors[`${index}_internal`] =
                    "Maximum mark is 50";

            }

            if (
                student.external !== "" &&
                Number(student.external) > 50
            ) {

                newErrors[`${index}_external`] =
                    "Maximum mark is 50";

            }

        });

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;

    }

    function saveMarks() {

        if (!validateForm()) {
            return;
        }

        console.log({

            subject,
            semester,
            students

        });

        // No popup alert
        console.log("Marks Saved Successfully");

    }

    return (

        <DashboardLayout
            role="teacher"
            title="Add Marks"
        >

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-success text-white">

                        <h3>Add Student Marks</h3>

                    </div>

                    <div className="card-body">

                        {/* Subject & Semester */}

                        <div className="row mb-4">

                            {/* Subject */}

                            <div className="col-md-6">

                                <label className="form-label">

                                    Select Subject

                                </label>

                                <select
                                    className={`form-select ${
                                        errors.subject
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    value={subject}
                                    onChange={(e) => {

                                        setSubject(e.target.value);

                                        setErrors((prev) => ({
                                            ...prev,
                                            subject: ""
                                        }));

                                    }}
                                >

                                    <option value="">
                                        Choose Subject
                                    </option>

                                    <option>
                                        Programming Logic & Design
                                    </option>

                                    <option>
                                        C Programming
                                    </option>

                                    <option>
                                        Java Programming
                                    </option>

                                    <option>
                                        Database Management System
                                    </option>

                                    <option>
                                        Web Technology
                                    </option>

                                </select>

                                {errors.subject && (

                                    <div className="text-danger mt-1">

                                        {errors.subject}

                                    </div>

                                )}

                            </div>

                            {/* Semester */}

                            <div className="col-md-6">

                                <label className="form-label">

                                    Semester

                                </label>

                                <select
                                    className={`form-select ${
                                        errors.semester
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    value={semester}
                                    onChange={(e) => {

                                        setSemester(e.target.value);

                                        setErrors((prev) => ({
                                            ...prev,
                                            semester: ""
                                        }));

                                    }}
                                >

                                    <option value="">
                                        Choose Semester
                                    </option>

                                    <option>
                                        1st Semester
                                    </option>

                                    <option>
                                        2nd Semester
                                    </option>

                                    <option>
                                        3rd Semester
                                    </option>

                                    <option>
                                        4th Semester
                                    </option>

                                </select>

                                {errors.semester && (

                                    <div className="text-danger mt-1">

                                        {errors.semester}

                                    </div>

                                )}

                            </div>

                        </div>

                        {/* Marks Table */}

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Roll</th>

                                    <th>Student</th>

                                    <th>Internal (50)</th>

                                    <th>External (50)</th>

                                </tr>

                            </thead>

                            <tbody>

                                {students.map((student, index) => (

                                    <tr key={student.id}>

                                        <td>

                                            {student.roll}

                                        </td>

                                        <td>

                                            {student.name}

                                        </td>

                                        {/* Internal */}

                                        <td>

                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    errors[
                                                        `${index}_internal`
                                                    ]
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                min="0"
                                                max="50"
                                                value={student.internal}
                                                onChange={(e) =>
                                                    handleMarks(
                                                        index,
                                                        "internal",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            {errors[
                                                `${index}_internal`
                                            ] && (

                                                <div className="text-danger mt-1">

                                                    {
                                                        errors[
                                                            `${index}_internal`
                                                        ]
                                                    }

                                                </div>

                                            )}

                                        </td>

                                        {/* External */}

                                        <td>

                                            <input
                                                type="number"
                                                className={`form-control ${
                                                    errors[
                                                        `${index}_external`
                                                    ]
                                                        ? "is-invalid"
                                                        : ""
                                                }`}
                                                min="0"
                                                max="50"
                                                value={student.external}
                                                onChange={(e) =>
                                                    handleMarks(
                                                        index,
                                                        "external",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            {errors[
                                                `${index}_external`
                                            ] && (

                                                <div className="text-danger mt-1">

                                                    {
                                                        errors[
                                                            `${index}_external`
                                                        ]
                                                    }

                                                </div>

                                            )}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                        <button
                            className="btn btn-success"
                            onClick={saveMarks}
                        >

                            Save Marks

                        </button>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default AddMarks;