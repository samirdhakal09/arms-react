import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { jsPDF } from "jspdf";

function StudentResult() {

    /* ================= STUDENT INFORMATION ================= */

    const student = {
        name: "Hari Sharma",
        roll: "BCA001",
        registration: "PU-2024-001"
    };


    /* ================= RESULT DATA ================= */

    const results = {

        "1st Semester": {

            "Pre-Board": [
                {
                    code: "BCA101",
                    subject: "Programming Logic & Design",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                },
                {
                    code: "BCA102",
                    subject: "C Programming",
                    fullMarks: 100,
                    marks: 78,
                    grade: "B+"
                },
                {
                    code: "BCA103",
                    subject: "Mathematics",
                    fullMarks: 100,
                    marks: 85,
                    grade: "A"
                },
                {
                    code: "BCA104",
                    subject: "English",
                    fullMarks: 100,
                    marks: 80,
                    grade: "A"
                },
                {
                    code: "BCA105",
                    subject: "Computer Fundamentals",
                    fullMarks: 100,
                    marks: 75,
                    grade: "B+"
                }
            ],

            "University": [
                {
                    code: "BCA101",
                    subject: "Programming Logic & Design",
                    fullMarks: 100,
                    marks: 88,
                    grade: "A"
                },
                {
                    code: "BCA102",
                    subject: "C Programming",
                    fullMarks: 100,
                    marks: 84,
                    grade: "A"
                },
                {
                    code: "BCA103",
                    subject: "Mathematics",
                    fullMarks: 100,
                    marks: 86,
                    grade: "A"
                },
                {
                    code: "BCA104",
                    subject: "English",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                },
                {
                    code: "BCA105",
                    subject: "Computer Fundamentals",
                    fullMarks: 100,
                    marks: 80,
                    grade: "A"
                }
            ],

            "Internal": [
                {
                    code: "BCA101",
                    subject: "Programming Logic & Design",
                    fullMarks: 50,
                    marks: 42,
                    grade: "A"
                },
                {
                    code: "BCA102",
                    subject: "C Programming",
                    fullMarks: 50,
                    marks: 40,
                    grade: "A"
                },
                {
                    code: "BCA103",
                    subject: "Mathematics",
                    fullMarks: 50,
                    marks: 43,
                    grade: "A"
                },
                {
                    code: "BCA104",
                    subject: "English",
                    fullMarks: 50,
                    marks: 41,
                    grade: "A"
                },
                {
                    code: "BCA105",
                    subject: "Computer Fundamentals",
                    fullMarks: 50,
                    marks: 38,
                    grade: "B+"
                }
            ]

        },


        "2nd Semester": {

            "Pre-Board": [
                {
                    code: "BCA201",
                    subject: "Object Oriented Programming",
                    fullMarks: 100,
                    marks: 80,
                    grade: "A"
                },
                {
                    code: "BCA202",
                    subject: "Database Management System",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                },
                {
                    code: "BCA203",
                    subject: "Web Technology",
                    fullMarks: 100,
                    marks: 78,
                    grade: "B+"
                },
                {
                    code: "BCA204",
                    subject: "Statistics",
                    fullMarks: 100,
                    marks: 81,
                    grade: "A"
                },
                {
                    code: "BCA205",
                    subject: "Operating System",
                    fullMarks: 100,
                    marks: 76,
                    grade: "B+"
                }
            ],

            "University": [
                {
                    code: "BCA201",
                    subject: "Object Oriented Programming",
                    fullMarks: 100,
                    marks: 85,
                    grade: "A"
                },
                {
                    code: "BCA202",
                    subject: "Database Management System",
                    fullMarks: 100,
                    marks: 88,
                    grade: "A"
                },
                {
                    code: "BCA203",
                    subject: "Web Technology",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                },
                {
                    code: "BCA204",
                    subject: "Statistics",
                    fullMarks: 100,
                    marks: 84,
                    grade: "A"
                },
                {
                    code: "BCA205",
                    subject: "Operating System",
                    fullMarks: 100,
                    marks: 80,
                    grade: "A"
                }
            ],

            "Internal": [
                {
                    code: "BCA201",
                    subject: "Object Oriented Programming",
                    fullMarks: 50,
                    marks: 40,
                    grade: "A"
                },
                {
                    code: "BCA202",
                    subject: "Database Management System",
                    fullMarks: 50,
                    marks: 43,
                    grade: "A"
                },
                {
                    code: "BCA203",
                    subject: "Web Technology",
                    fullMarks: 50,
                    marks: 39,
                    grade: "B+"
                },
                {
                    code: "BCA204",
                    subject: "Statistics",
                    fullMarks: 50,
                    marks: 41,
                    grade: "A"
                },
                {
                    code: "BCA205",
                    subject: "Operating System",
                    fullMarks: 50,
                    marks: 38,
                    grade: "B+"
                }
            ]

        },


        "3rd Semester": {

            "Pre-Board": [
                {
                    code: "BCA301",
                    subject: "Java Programming",
                    fullMarks: 100,
                    marks: 84,
                    grade: "A"
                },
                {
                    code: "BCA302",
                    subject: "Computer Graphics",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                },
                {
                    code: "BCA303",
                    subject: "Software Engineering",
                    fullMarks: 100,
                    marks: 85,
                    grade: "A"
                },
                {
                    code: "BCA304",
                    subject: "Computer Networks",
                    fullMarks: 100,
                    marks: 80,
                    grade: "A"
                },
                {
                    code: "BCA305",
                    subject: "Web Technology II",
                    fullMarks: 100,
                    marks: 86,
                    grade: "A"
                }
            ],

            "University": [
                {
                    code: "BCA301",
                    subject: "Java Programming",
                    fullMarks: 100,
                    marks: 88,
                    grade: "A"
                },
                {
                    code: "BCA302",
                    subject: "Computer Graphics",
                    fullMarks: 100,
                    marks: 85,
                    grade: "A"
                },
                {
                    code: "BCA303",
                    subject: "Software Engineering",
                    fullMarks: 100,
                    marks: 89,
                    grade: "A"
                },
                {
                    code: "BCA304",
                    subject: "Computer Networks",
                    fullMarks: 100,
                    marks: 84,
                    grade: "A"
                },
                {
                    code: "BCA305",
                    subject: "Web Technology II",
                    fullMarks: 100,
                    marks: 87,
                    grade: "A"
                }
            ],

            "Internal": [
                {
                    code: "BCA301",
                    subject: "Java Programming",
                    fullMarks: 50,
                    marks: 43,
                    grade: "A"
                },
                {
                    code: "BCA302",
                    subject: "Computer Graphics",
                    fullMarks: 50,
                    marks: 41,
                    grade: "A"
                },
                {
                    code: "BCA303",
                    subject: "Software Engineering",
                    fullMarks: 50,
                    marks: 44,
                    grade: "A"
                },
                {
                    code: "BCA304",
                    subject: "Computer Networks",
                    fullMarks: 50,
                    marks: 40,
                    grade: "A"
                },
                {
                    code: "BCA305",
                    subject: "Web Technology II",
                    fullMarks: 50,
                    marks: 42,
                    grade: "A"
                }
            ]

        },


        "4th Semester": {

            "Pre-Board": [
                {
                    code: "BCA401",
                    subject: "Database Management System",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                },
                {
                    code: "BCA402",
                    subject: "Operating System",
                    fullMarks: 100,
                    marks: 80,
                    grade: "A"
                },
                {
                    code: "BCA403",
                    subject: "Computer Graphics",
                    fullMarks: 100,
                    marks: 85,
                    grade: "A"
                },
                {
                    code: "BCA404",
                    subject: "Web Technology II",
                    fullMarks: 100,
                    marks: 83,
                    grade: "A"
                },
                {
                    code: "BCA405",
                    subject: "Software Engineering",
                    fullMarks: 100,
                    marks: 82,
                    grade: "A"
                }
            ],

            "University": [
                {
                    code: "BCA401",
                    subject: "Database Management System",
                    fullMarks: 100,
                    marks: 88,
                    grade: "A"
                },
                {
                    code: "BCA402",
                    subject: "Operating System",
                    fullMarks: 100,
                    marks: 86,
                    grade: "A"
                },
                {
                    code: "BCA403",
                    subject: "Computer Graphics",
                    fullMarks: 100,
                    marks: 90,
                    grade: "A+"
                },
                {
                    code: "BCA404",
                    subject: "Web Technology II",
                    fullMarks: 100,
                    marks: 87,
                    grade: "A"
                },
                {
                    code: "BCA405",
                    subject: "Software Engineering",
                    fullMarks: 100,
                    marks: 86,
                    grade: "A"
                }
            ],

            "Internal": [
                {
                    code: "BCA401",
                    subject: "Database Management System",
                    fullMarks: 50,
                    marks: 44,
                    grade: "A"
                },
                {
                    code: "BCA402",
                    subject: "Operating System",
                    fullMarks: 50,
                    marks: 42,
                    grade: "A"
                },
                {
                    code: "BCA403",
                    subject: "Computer Graphics",
                    fullMarks: 50,
                    marks: 45,
                    grade: "A"
                },
                {
                    code: "BCA404",
                    subject: "Web Technology II",
                    fullMarks: 50,
                    marks: 43,
                    grade: "A"
                },
                {
                    code: "BCA405",
                    subject: "Software Engineering",
                    fullMarks: 50,
                    marks: 42,
                    grade: "A"
                }
            ]

        }

    };


    /* ================= STATE ================= */

    const [selectedSemester, setSelectedSemester] =
        useState("1st Semester");

    const [selectedExam, setSelectedExam] =
        useState("Pre-Board");


    /* ================= CURRENT RESULT ================= */

    const currentResult =
        results[selectedSemester]?.[selectedExam] || [];


    /* ================= CALCULATIONS ================= */

    const totalMarks = currentResult.reduce(
        (total, subject) => total + subject.marks,
        0
    );

    const totalFullMarks = currentResult.reduce(
        (total, subject) => total + subject.fullMarks,
        0
    );

    const percentage =
        totalFullMarks > 0
            ? ((totalMarks / totalFullMarks) * 100).toFixed(2)
            : "0.00";


    /* Simple demo GPA calculation */

    const gpa =
        totalFullMarks > 0
            ? (parseFloat(percentage) / 25).toFixed(2)
            : "0.00";


    const resultStatus =
        currentResult.length > 0 &&
        currentResult.every(subject => subject.marks >= subject.fullMarks * 0.4)
            ? "PASS"
            : "FAIL";


    /* ================= DOWNLOAD CURRENT RESULT ================= */

    const downloadCurrentPDF = () => {

        const doc = new jsPDF();

        doc.setFontSize(18);

        doc.text(
            "Academic Result Management System",
            30,
            20
        );

        doc.setFontSize(13);

        doc.text(
            "Pokhara University",
            75,
            30
        );

        doc.setFontSize(11);

        doc.text(
            `Student Name : ${student.name}`,
            20,
            45
        );

        doc.text(
            `Roll Number : ${student.roll}`,
            20,
            53
        );

        doc.text(
            `Registration No : ${student.registration}`,
            20,
            61
        );

        doc.text(
            `Semester : ${selectedSemester}`,
            20,
            69
        );

        doc.text(
            `Exam Type : ${selectedExam}`,
            20,
            77
        );

        doc.line(20, 83, 190, 83);

        let y = 94;

        doc.text("Code", 20, y);
        doc.text("Subject", 48, y);
        doc.text("Full", 125, y);
        doc.text("Marks", 145, y);
        doc.text("Grade", 170, y);

        y += 8;

        currentResult.forEach((subject) => {

            doc.text(subject.code, 20, y);

            doc.text(subject.subject, 48, y);

            doc.text(String(subject.fullMarks), 125, y);

            doc.text(String(subject.marks), 145, y);

            doc.text(subject.grade, 170, y);

            y += 9;

        });

        y += 5;

        doc.line(20, y, 190, y);

        y += 12;

        doc.text(
            `Total Marks : ${totalMarks} / ${totalFullMarks}`,
            20,
            y
        );

        y += 8;

        doc.text(
            `Percentage : ${percentage}%`,
            20,
            y
        );

        y += 8;

        doc.text(
            `GPA : ${gpa}`,
            20,
            y
        );

        y += 8;

        doc.text(
            `Result : ${resultStatus}`,
            20,
            y
        );

        doc.save(
            `${student.name}_${selectedSemester}_${selectedExam}_Result.pdf`
        );

    };


    /* ================= DOWNLOAD COMPLETE RESULT ================= */

    const downloadCompletePDF = () => {

        const doc = new jsPDF();

        doc.setFontSize(18);

        doc.text(
            "Complete Academic Result",
            55,
            20
        );

        doc.setFontSize(11);

        doc.text(
            `Student Name : ${student.name}`,
            20,
            35
        );

        doc.text(
            `Roll Number : ${student.roll}`,
            20,
            43
        );

        doc.text(
            `Registration No : ${student.registration}`,
            20,
            51
        );

        let y = 65;

        Object.entries(results).forEach(
            ([semester, examResults]) => {

                doc.setFontSize(14);

                doc.text(
                    semester,
                    20,
                    y
                );

                y += 8;

                Object.entries(examResults).forEach(
                    ([examType, subjects]) => {

                        doc.setFontSize(11);

                        doc.text(
                            examType,
                            25,
                            y
                        );

                        y += 7;

                        subjects.forEach(
                            (subject) => {

                                doc.text(
                                    `${subject.code} - ${subject.subject}: ${subject.marks}/${subject.fullMarks}`,
                                    30,
                                    y
                                );

                                y += 6;

                                if (y > 275) {

                                    doc.addPage();

                                    y = 20;

                                }

                            }
                        );

                        y += 5;

                    }
                );

                y += 5;

            }
        );

        doc.save(
            `${student.name}_Complete_Academic_Result.pdf`
        );

    };


    return (

        <DashboardLayout
            role="student"
            title="Result"
        >

            <div className="container-fluid mt-4">

                <h2 className="mb-4">
                    Academic Results
                </h2>


                {/* ================= FILTERS ================= */}

                <div className="card shadow mb-4">

                    <div className="card-body">

                        <div className="row">

                            <div className="col-md-6">

                                <label className="form-label fw-bold">
                                    Select Semester
                                </label>

                                <select
                                    className="form-select"
                                    value={selectedSemester}
                                    onChange={(e) =>
                                        setSelectedSemester(e.target.value)
                                    }
                                >

                                    {Object.keys(results).map(
                                        (semester) => (

                                            <option
                                                key={semester}
                                                value={semester}
                                            >
                                                {semester}
                                            </option>

                                        )
                                    )}

                                </select>

                            </div>


                            <div className="col-md-6">

                                <label className="form-label fw-bold">
                                    Select Exam Type
                                </label>

                                <select
                                    className="form-select"
                                    value={selectedExam}
                                    onChange={(e) =>
                                        setSelectedExam(e.target.value)
                                    }
                                >

                                    <option value="Pre-Board">
                                        Pre-Board
                                    </option>

                                    <option value="University">
                                        University
                                    </option>

                                    <option value="Internal">
                                        Internal
                                    </option>

                                </select>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= STUDENT INFORMATION ================= */}

                <div className="card shadow mb-4">

                    <div className="card-body">

                        <div className="row">

                            <div className="col-md-4">
                                <strong>Student:</strong> {student.name}
                            </div>

                            <div className="col-md-4">
                                <strong>Roll:</strong> {student.roll}
                            </div>

                            <div className="col-md-4">
                                <strong>Registration:</strong>{" "}
                                {student.registration}
                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= RESULT TABLE ================= */}

                <div className="card shadow">

                    <div className="card-header bg-success text-white">

                        <h4 className="mb-0">

                            {selectedSemester} - {selectedExam} Result

                        </h4>

                    </div>


                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover text-center">

                                <thead className="table-light">

                                    <tr>

                                        <th>#</th>

                                        <th>Subject Code</th>

                                        <th>Subject Name</th>

                                        <th>Full Marks</th>

                                        <th>Obtained Marks</th>

                                        <th>Grade</th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {currentResult.map(
                                        (subject, index) => (

                                            <tr key={subject.code}>

                                                <td>
                                                    {index + 1}
                                                </td>

                                                <td>
                                                    {subject.code}
                                                </td>

                                                <td className="text-start">
                                                    {subject.subject}
                                                </td>

                                                <td>
                                                    {subject.fullMarks}
                                                </td>

                                                <td>
                                                    {subject.marks}
                                                </td>

                                                <td>
                                                    <span className="badge bg-success">
                                                        {subject.grade}
                                                    </span>
                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>


                        {/* ================= SUMMARY ================= */}

                        <div className="row mt-4">

                            <div className="col-md-3 mb-3">

                                <div className="card bg-primary text-white">

                                    <div className="card-body text-center">

                                        <h6>Total Marks</h6>

                                        <h4>
                                            {totalMarks}/{totalFullMarks}
                                        </h4>

                                    </div>

                                </div>

                            </div>


                            <div className="col-md-3 mb-3">

                                <div className="card bg-success text-white">

                                    <div className="card-body text-center">

                                        <h6>Percentage</h6>

                                        <h4>
                                            {percentage}%
                                        </h4>

                                    </div>

                                </div>

                            </div>


                            <div className="col-md-3 mb-3">

                                <div className="card bg-warning text-dark">

                                    <div className="card-body text-center">

                                        <h6>GPA</h6>

                                        <h4>
                                            {gpa}
                                        </h4>

                                    </div>

                                </div>

                            </div>


                            <div className="col-md-3 mb-3">

                                <div className="card bg-info text-white">

                                    <div className="card-body text-center">

                                        <h6>Result</h6>

                                        <h4>
                                            {resultStatus}
                                        </h4>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* ================= DOWNLOAD BUTTONS ================= */}

                        <div className="d-flex justify-content-between mt-4">

                            <button
                                className="btn btn-danger"
                                onClick={downloadCurrentPDF}
                            >

                                📄 Download {selectedSemester} {selectedExam} PDF

                            </button>


                            <button
                                className="btn btn-primary"
                                onClick={downloadCompletePDF}
                            >

                                📚 Download Complete Academic Result

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default StudentResult;