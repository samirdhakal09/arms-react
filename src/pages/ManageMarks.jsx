import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

function ManageMarks() {

    const [marks, setMarks] = useState([

        {
            id: 1,
            roll: "BCA001",
            student: "Hari Sharma",
            semester: "1st Semester",
            examType: "Pre-Board",
            subject: "Programming Logic & Design",
            internal: 40,
            external: 45
        },

        {
            id: 2,
            roll: "BCA002",
            student: "Ram Karki",
            semester: "1st Semester",
            examType: "UT",
            subject: "Programming Logic & Design",
            internal: 38,
            external: 42
        },

        {
            id: 3,
            roll: "BCA003",
            student: "Sita Nepal",
            semester: "1st Semester",
            examType: "Final",
            subject: "Programming Logic & Design",
            internal: 45,
            external: 48
        },

        {
            id: 4,
            roll: "BCA001",
            student: "Hari Sharma",
            semester: "2nd Semester",
            examType: "Pre-Board",
            subject: "C Programming",
            internal: 42,
            external: 46
        }

    ]);

    const [editing, setEditing] = useState(null);

    const [search, setSearch] = useState("");

    const [filterSemester, setFilterSemester] = useState("");

    const [filterExamType, setFilterExamType] = useState("");

    const [filterSubject, setFilterSubject] = useState("");

    // Calculate total marks out of 100
    function total(internal, external) {

        return (
            Number(internal || 0) +
            Number(external || 0)
        );

    }

    // Grade according to the required grading system
    function grade(totalMarks) {

        if (totalMarks >= 90) return "A";

        if (totalMarks >= 85) return "A-";

        if (totalMarks >= 80) return "B+";

        if (totalMarks >= 75) return "B";

        if (totalMarks >= 70) return "B-";

        if (totalMarks >= 65) return "C+";

        if (totalMarks >= 60) return "C";

        if (totalMarks >= 55) return "C-";

        if (totalMarks >= 50) return "D+";

        if (totalMarks >= 45) return "D";

        return "F";

    }

    // Check pass/fail
    function result(totalMarks) {

        return totalMarks >= 45
            ? "PASS"
            : "FAIL";

    }

    function deleteMarks(id) {

        if (window.confirm("Delete these marks?")) {

            setMarks(

                marks.filter(mark => mark.id !== id)

            );

        }

    }

    function handleChange(e) {

        setEditing({

            ...editing,

            [e.target.name]: e.target.value

        });

    }

    const filteredMarks = marks.filter(mark => {

        const searchMatch =

            mark.student
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            mark.roll
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            mark.subject
                .toLowerCase()
                .includes(search.toLowerCase());

        const semesterMatch =

            filterSemester === "" ||
            mark.semester === filterSemester;

        const examMatch =

            filterExamType === "" ||
            mark.examType === filterExamType;

        const subjectMatch =

            filterSubject === "" ||
            mark.subject === filterSubject;

        return (

            searchMatch &&
            semesterMatch &&
            examMatch &&
            subjectMatch

        );

    });

    return (

        <DashboardLayout
            role="teacher"
            title="Manage Marks"
        >

            <div className="container mt-4">

                {/* Main Marks Card */}

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">

                        <h3>
                            Manage Student Marks
                        </h3>

                    </div>

                    <div className="card-body">

                        {/* Search */}

                        <div className="mb-3">

                            <label className="form-label">

                                Search Student

                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Student / Roll / Subject"
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                        {/* Filters */}

                        <div className="row mb-4">

                            {/* Semester */}

                            <div className="col-md-4">

                                <label className="form-label">

                                    Semester

                                </label>

                                <select
                                    className="form-select"
                                    value={filterSemester}
                                    onChange={(e) =>
                                        setFilterSemester(e.target.value)
                                    }
                                >

                                    <option value="">
                                        All Semesters
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

                            </div>

                            {/* Exam Type */}

                            <div className="col-md-4">

                                <label className="form-label">

                                    Exam Type

                                </label>

                                <select
                                    className="form-select"
                                    value={filterExamType}
                                    onChange={(e) =>
                                        setFilterExamType(e.target.value)
                                    }
                                >

                                    <option value="">
                                        All Exam Types
                                    </option>

                                    <option value="Pre-Board">
                                        Pre-Board
                                    </option>

                                    <option value="UT">
                                        Unit Test (UT)
                                    </option>

                                    <option value="Final">
                                        Final Semester
                                    </option>

                                </select>

                            </div>

                            {/* Subject */}

                            <div className="col-md-4">

                                <label className="form-label">

                                    Subject

                                </label>

                                <select
                                    className="form-select"
                                    value={filterSubject}
                                    onChange={(e) =>
                                        setFilterSubject(e.target.value)
                                    }
                                >

                                    <option value="">
                                        All Subjects
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

                            </div>

                        </div>

                        {/* Marks Table */}

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover">

                                <thead className="table-dark">

                                    <tr>

                                        <th>Roll</th>

                                        <th>Student</th>

                                        <th>Semester</th>

                                        <th>Exam Type</th>

                                        <th>Subject</th>

                                        <th>Internal / 50</th>

                                        <th>External / 50</th>

                                        <th>Total / 100</th>

                                        <th>Grade</th>

                                        <th>Result</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        filteredMarks.length > 0 ?

                                            filteredMarks.map(mark => {

                                                const totalMarks =
                                                    total(
                                                        mark.internal,
                                                        mark.external
                                                    );

                                                return (

                                                    <tr key={mark.id}>

                                                        <td>
                                                            {mark.roll}
                                                        </td>

                                                        <td>
                                                            {mark.student}
                                                        </td>

                                                        <td>
                                                            {mark.semester}
                                                        </td>

                                                        <td>

                                                            <span
                                                                className={
                                                                    mark.examType === "Pre-Board"
                                                                        ? "badge bg-warning text-dark"
                                                                        : mark.examType === "UT"
                                                                            ? "badge bg-info text-dark"
                                                                            : "badge bg-success"
                                                                }
                                                            >

                                                                {mark.examType}

                                                            </span>

                                                        </td>

                                                        <td>
                                                            {mark.subject}
                                                        </td>

                                                        <td>
                                                            {mark.internal}
                                                        </td>

                                                        <td>
                                                            {mark.external}
                                                        </td>

                                                        <td>
                                                            <strong>
                                                                {totalMarks}
                                                            </strong>
                                                        </td>

                                                        <td>

                                                            <strong>
                                                                {grade(totalMarks)}
                                                            </strong>

                                                        </td>

                                                        <td>

                                                            <span
                                                                className={
                                                                    result(totalMarks) === "PASS"
                                                                        ? "badge bg-success"
                                                                        : "badge bg-danger"
                                                                }
                                                            >

                                                                {result(totalMarks)}

                                                            </span>

                                                        </td>

                                                        <td>

                                                            <button
                                                                className="btn btn-warning btn-sm me-2"
                                                                onClick={() =>
                                                                    setEditing({
                                                                        ...mark
                                                                    })
                                                                }
                                                            >

                                                                Edit

                                                            </button>

                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() =>
                                                                    deleteMarks(mark.id)
                                                                }
                                                            >

                                                                Delete

                                                            </button>

                                                        </td>

                                                    </tr>

                                                );

                                            })

                                            :

                                            (

                                                <tr>

                                                    <td
                                                        colSpan="11"
                                                        className="text-center"
                                                    >

                                                        No marks found.

                                                    </td>

                                                </tr>

                                            )

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

                {/* Edit Marks */}

                {

                    editing && (

                        <div className="card shadow mt-4">

                            <div className="card-header bg-success text-white">

                                <h4>
                                    Edit Student Marks
                                </h4>

                            </div>

                            <div className="card-body">

                                {/* Student Information */}

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">

                                            Student

                                        </label>

                                        <input
                                            className="form-control"
                                            value={editing.student}
                                            disabled
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">

                                            Roll Number

                                        </label>

                                        <input
                                            className="form-control"
                                            value={editing.roll}
                                            disabled
                                        />

                                    </div>

                                </div>

                                {/* Semester / Exam / Subject */}

                                <div className="row">

                                    <div className="col-md-4 mb-3">

                                        <label className="form-label">

                                            Semester

                                        </label>

                                        <select
                                            className="form-select"
                                            name="semester"
                                            value={editing.semester}
                                            onChange={handleChange}
                                        >

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

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label className="form-label">

                                            Exam Type

                                        </label>

                                        <select
                                            className="form-select"
                                            name="examType"
                                            value={editing.examType}
                                            onChange={handleChange}
                                        >

                                            <option value="Pre-Board">
                                                Pre-Board
                                            </option>

                                            <option value="UT">
                                                Unit Test (UT)
                                            </option>

                                            <option value="Final">
                                                Final Semester
                                            </option>

                                        </select>

                                    </div>

                                    <div className="col-md-4 mb-3">

                                        <label className="form-label">

                                            Subject

                                        </label>

                                        <select
                                            className="form-select"
                                            name="subject"
                                            value={editing.subject}
                                            onChange={handleChange}
                                        >

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

                                    </div>

                                </div>

                                {/* Marks */}

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">

                                            Internal Marks (50)

                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            name="internal"
                                            min="0"
                                            max="50"
                                            value={editing.internal}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">

                                            External Marks (50)

                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            name="external"
                                            min="0"
                                            max="50"
                                            value={editing.external}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                </div>

                                {/* Calculated Result */}

                                <div className="mt-3 p-3 bg-light rounded">

                                    <h5>

                                        Total Marks:

                                        {" "}

                                        {
                                            total(
                                                editing.internal,
                                                editing.external
                                            )
                                        }

                                        {" / 100"}

                                    </h5>

                                    <h5>

                                        Grade:

                                        {" "}

                                        {
                                            grade(
                                                total(
                                                    editing.internal,
                                                    editing.external
                                                )
                                            )
                                        }

                                    </h5>

                                    <h5>

                                        Result:

                                        {" "}

                                        <span
                                            className={
                                                result(
                                                    total(
                                                        editing.internal,
                                                        editing.external
                                                    )
                                                ) === "PASS"
                                                    ? "text-success"
                                                    : "text-danger"
                                            }
                                        >

                                            {
                                                result(
                                                    total(
                                                        editing.internal,
                                                        editing.external
                                                    )
                                                )
                                            }

                                        </span>

                                    </h5>

                                </div>

                                {/* Buttons */}

                                <button
                                    className="btn btn-success mt-3 me-2"
                                    onClick={() => {

                                        setMarks(

                                            marks.map(mark =>

                                                mark.id === editing.id
                                                    ? {
                                                        ...editing,
                                                        internal:
                                                            Number(editing.internal),
                                                        external:
                                                            Number(editing.external)
                                                    }
                                                    : mark

                                            )

                                        );

                                        setEditing(null);

                                    }}
                                >

                                    Save Changes

                                </button>

                                <button
                                    className="btn btn-secondary mt-3"
                                    onClick={() =>
                                        setEditing(null)
                                    }
                                >

                                    Cancel

                                </button>

                            </div>

                        </div>

                    )

                }

            </div>

        </DashboardLayout>

    );

}

export default ManageMarks;