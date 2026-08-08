import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { jsPDF } from "jspdf";

function Reports() {

    const [students] = useState([

        {
            id: 1,
            fullname: "Hari Sharma",
            roll: "BCA001",
            registration: "PU-2024-001",
            gender: "Male",
            semester: "4th Semester",
            department: "BCA",
            email: "hari@gmail.com",
            phone: "9800000001",

            results: [

                {
                    semester: "1st Semester",
                    total: 410,
                    percentage: "82%",
                    gpa: "3.62",
                    result: "PASS"
                },

                {
                    semester: "2nd Semester",
                    total: 404,
                    percentage: "80.8%",
                    gpa: "3.55",
                    result: "PASS"
                },

                {
                    semester: "3rd Semester",
                    total: 422,
                    percentage: "84.4%",
                    gpa: "3.74",
                    result: "PASS"
                },

                {
                    semester: "4th Semester",
                    total: 432,
                    percentage: "86.4%",
                    gpa: "3.82",
                    result: "PASS"
                }

            ]

        },

        {
            id: 2,
            fullname: "Ram Karki",
            roll: "BCA002",
            registration: "PU-2024-002",
            gender: "Male",
            semester: "2nd Semester",
            department: "BCA",
            email: "ram@gmail.com",
            phone: "9800000002",

            results: [

                {
                    semester: "1st Semester",
                    total: 390,
                    percentage: "78%",
                    gpa: "3.40",
                    result: "PASS"
                },

                {
                    semester: "2nd Semester",
                    total: 402,
                    percentage: "80.4%",
                    gpa: "3.55",
                    result: "PASS"
                }

            ]

        },

        {
            id: 3,
            fullname: "Sita Nepal",
            roll: "BCA003",
            registration: "PU-2024-003",
            gender: "Female",
            semester: "3rd Semester",
            department: "BCA",
            email: "sita@gmail.com",
            phone: "9800000003",

            results: [

                {
                    semester: "1st Semester",
                    total: 420,
                    percentage: "84%",
                    gpa: "3.70",
                    result: "PASS"
                },

                {
                    semester: "2nd Semester",
                    total: 430,
                    percentage: "86%",
                    gpa: "3.82",
                    result: "PASS"
                },

                {
                    semester: "3rd Semester",
                    total: 425,
                    percentage: "85%",
                    gpa: "3.75",
                    result: "PASS"
                }

            ]

        }

    ]);

    const [search, setSearch] = useState("");

    const [selectedStudent, setSelectedStudent] = useState(null);


    /* =====================================================
       SEARCH STUDENTS
    ===================================================== */

    const filteredStudents = students.filter((student) =>

        student.fullname
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        student.roll
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        student.registration
            .toLowerCase()
            .includes(search.toLowerCase())

    );


    /* =====================================================
       DOWNLOAD STUDENT REPORT AS PDF
    ===================================================== */

    const downloadPDF = (student) => {

        const doc = new jsPDF();


        /* ================= HEADER ================= */

        doc.setFontSize(20);

        doc.setFont("helvetica", "bold");

        doc.text(
            "ACADEMIC RESULT MANAGEMENT SYSTEM",
            105,
            20,
            { align: "center" }
        );


        doc.setFontSize(14);

        doc.setFont("helvetica", "normal");

        doc.text(
            "Pokhara University",
            105,
            30,
            { align: "center" }
        );


        doc.setFontSize(12);

        doc.text(
            "STUDENT ACADEMIC REPORT",
            105,
            40,
            { align: "center" }
        );


        /* ================= LINE ================= */

        doc.line(20, 45, 190, 45);


        /* ================= STUDENT INFORMATION ================= */

        doc.setFontSize(14);

        doc.setFont("helvetica", "bold");

        doc.text(
            "Student Information",
            20,
            58
        );


        doc.setFontSize(11);

        doc.setFont("helvetica", "normal");


        doc.text(
            `Full Name: ${student.fullname}`,
            20,
            70
        );

        doc.text(
            `Roll Number: ${student.roll}`,
            110,
            70
        );


        doc.text(
            `Registration: ${student.registration}`,
            20,
            80
        );

        doc.text(
            `Gender: ${student.gender}`,
            110,
            80
        );


        doc.text(
            `Department: ${student.department}`,
            20,
            90
        );

        doc.text(
            `Current Semester: ${student.semester}`,
            110,
            90
        );


        doc.text(
            `Email: ${student.email}`,
            20,
            100
        );

        doc.text(
            `Phone: ${student.phone}`,
            110,
            100
        );


        /* ================= RESULT TABLE ================= */

        doc.setFontSize(14);

        doc.setFont("helvetica", "bold");

        doc.text(
            "Academic Result",
            20,
            118
        );


        /* Table header */

        doc.setFontSize(10);

        doc.setFont("helvetica", "bold");


        doc.text("Semester", 20, 130);

        doc.text("Total", 75, 130);

        doc.text("Percentage", 105, 130);

        doc.text("GPA", 145, 130);

        doc.text("Result", 170, 130);


        doc.line(20, 133, 190, 133);


        /* Table data */

        doc.setFont("helvetica", "normal");


        let y = 143;


        student.results.forEach((item) => {

            doc.text(
                item.semester,
                20,
                y
            );

            doc.text(
                String(item.total),
                75,
                y
            );

            doc.text(
                item.percentage,
                105,
                y
            );

            doc.text(
                item.gpa,
                145,
                y
            );

            doc.text(
                item.result,
                170,
                y
            );


            y += 10;

        });


        /* ================= SUMMARY ================= */

        y += 5;

        doc.line(20, y, 190, y);

        y += 15;


        const totalSemesters =
            student.results.length;


        const averageGPA =
            student.results.reduce(
                (sum, item) =>
                    sum + parseFloat(item.gpa),
                0
            ) / totalSemesters;


        const averagePercentage =
            student.results.reduce(
                (sum, item) =>
                    sum +
                    parseFloat(
                        item.percentage.replace("%", "")
                    ),
                0
            ) / totalSemesters;


        const allPassed =
            student.results.every(
                (item) =>
                    item.result === "PASS"
            );


        doc.setFontSize(12);

        doc.setFont("helvetica", "bold");

        doc.text(
            "Overall Summary",
            20,
            y
        );


        y += 10;


        doc.setFont("helvetica", "normal");

        doc.text(
            `Total Semesters: ${totalSemesters}`,
            20,
            y
        );


        y += 8;


        doc.text(
            `Average GPA: ${averageGPA.toFixed(2)}`,
            20,
            y
        );


        y += 8;


        doc.text(
            `Average Percentage: ${averagePercentage.toFixed(2)}%`,
            20,
            y
        );


        y += 8;


        doc.text(
            `Overall Result: ${allPassed ? "PASS" : "FAIL"}`,
            20,
            y
        );


        /* ================= FOOTER ================= */

        doc.setFontSize(9);

        doc.setFont("helvetica", "normal");


        doc.text(
            "Generated by ARMS - Academic Result Management System",
            105,
            280,
            { align: "center" }
        );


        doc.text(
            "Pokhara University",
            105,
            287,
            { align: "center" }
        );


        /* ================= SAVE PDF ================= */

        doc.save(
            `${student.roll}_Academic_Report.pdf`
        );

    };


    return (

        <DashboardLayout
            role="admin"
            title="Student Reports"
        >

            <div className="container-fluid mt-4">

                <h2 className="mb-4">
                    Student Reports
                </h2>


                {/* ================= SEARCH ================= */}

                <div className="card shadow mb-4">

                    <div className="card-body">

                        <input

                            type="text"

                            className="form-control"

                            placeholder="Search by Name, Roll Number or Registration Number"

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                        />

                    </div>

                </div>


                {/* ================= STUDENT LIST ================= */}

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">

                        <h5 className="mb-0">
                            All Students
                        </h5>

                    </div>


                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover">

                                <thead className="table-dark">

                                    <tr>

                                        <th>ID</th>

                                        <th>Name</th>

                                        <th>Roll</th>

                                        <th>Registration</th>

                                        <th>Department</th>

                                        <th>Semester</th>

                                        <th>Action</th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {

                                        filteredStudents.map(
                                            (student) => (

                                                <tr
                                                    key={student.id}
                                                >

                                                    <td>
                                                        {student.id}
                                                    </td>

                                                    <td>
                                                        {student.fullname}
                                                    </td>

                                                    <td>
                                                        {student.roll}
                                                    </td>

                                                    <td>
                                                        {student.registration}
                                                    </td>

                                                    <td>
                                                        {student.department}
                                                    </td>

                                                    <td>
                                                        {student.semester}
                                                    </td>

                                                    <td>

                                                        <button

                                                            className="btn btn-primary btn-sm"

                                                            onClick={() =>
                                                                setSelectedStudent(
                                                                    student
                                                                )
                                                            }

                                                        >

                                                            👁 View Report

                                                        </button>

                                                    </td>

                                                </tr>

                                            )
                                        )

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>


                {/* ================= STUDENT REPORT ================= */}

                {

                    selectedStudent && (

                        <div className="card shadow mt-4">

                            <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">

                                <h4 className="mb-0">
                                    Student Academic Report
                                </h4>


                                <button

                                    className="btn btn-light btn-sm"

                                    onClick={() =>
                                        setSelectedStudent(null)
                                    }

                                >

                                    ✕ Close

                                </button>

                            </div>


                            <div className="card-body">


                                {/* ================= STUDENT INFORMATION ================= */}

                                <h5 className="mb-3">
                                    Student Information
                                </h5>


                                <div className="row mb-4">


                                    <div className="col-md-4">

                                        <strong>
                                            Full Name:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.fullname
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Roll Number:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.roll
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Registration:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.registration
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Gender:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.gender
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Department:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.department
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Semester:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.semester
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Email:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.email
                                            }
                                        </p>

                                    </div>


                                    <div className="col-md-4">

                                        <strong>
                                            Phone:
                                        </strong>

                                        <p>
                                            {
                                                selectedStudent.phone
                                            }
                                        </p>

                                    </div>


                                </div>


                                {/* ================= ACADEMIC RESULT ================= */}

                                <h5 className="mb-3">
                                    Academic Result
                                </h5>


                                <div className="table-responsive">

                                    <table className="table table-bordered text-center">

                                        <thead className="table-light">

                                            <tr>

                                                <th>
                                                    Semester
                                                </th>

                                                <th>
                                                    Total Marks
                                                </th>

                                                <th>
                                                    Percentage
                                                </th>

                                                <th>
                                                    GPA
                                                </th>

                                                <th>
                                                    Result
                                                </th>

                                            </tr>

                                        </thead>


                                        <tbody>

                                            {

                                                selectedStudent.results.map(
                                                    (item, index) => (

                                                        <tr
                                                            key={index}
                                                        >

                                                            <td>
                                                                {
                                                                    item.semester
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.total
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.percentage
                                                                }
                                                            </td>

                                                            <td>
                                                                {
                                                                    item.gpa
                                                                }
                                                            </td>

                                                            <td>

                                                                <span

                                                                    className={
                                                                        item.result === "PASS"
                                                                            ? "badge bg-success"
                                                                            : "badge bg-danger"
                                                                    }

                                                                >

                                                                    {
                                                                        item.result
                                                                    }

                                                                </span>

                                                            </td>

                                                        </tr>

                                                    )

                                                )

                                            }

                                        </tbody>

                                    </table>

                                </div>


                                {/* ================= DOWNLOAD PDF ================= */}

                                <div className="text-end mt-3">

                                    <button

                                        className="btn btn-danger"

                                        onClick={() =>
                                            downloadPDF(
                                                selectedStudent
                                            )
                                        }

                                    >

                                        📄 Download Report PDF

                                    </button>

                                </div>


                            </div>

                        </div>

                    )

                }

            </div>

        </DashboardLayout>

    );

}

export default Reports;