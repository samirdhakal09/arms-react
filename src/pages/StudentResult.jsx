import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";
import { jsPDF } from "jspdf";

function StudentResult() {

    const [selectedSemester, setSelectedSemester] = useState(null);

    /*
    ==========================================
    STUDENT RESULT DATA
    ==========================================
    */

    const results = [
        {
            semester: "1st Semester",
            total: 410,
            percentage: "82%",
            gpa: "3.62",
            result: "PASS",

            subjects: [
                {
                    code: "BCA101",
                    name: "Programming Logic & Design",
                    fullMarks: 100,
                    obtained: 82,
                    grade: "A"
                },
                {
                    code: "BCA102",
                    name: "Mathematics",
                    fullMarks: 100,
                    obtained: 78,
                    grade: "B+"
                },
                {
                    code: "BCA103",
                    name: "C Programming",
                    fullMarks: 100,
                    obtained: 85,
                    grade: "A"
                },
                {
                    code: "BCA104",
                    name: "Digital Logic",
                    fullMarks: 100,
                    obtained: 80,
                    grade: "A-"
                },
                {
                    code: "BCA105",
                    name: "Computer Fundamentals",
                    fullMarks: 100,
                    obtained: 85,
                    grade: "A"
                }
            ]
        },

        {
            semester: "2nd Semester",
            total: 404,
            percentage: "80.8%",
            gpa: "3.55",
            result: "PASS",

            subjects: [
                {
                    code: "BCA201",
                    name: "Data Structures",
                    fullMarks: 100,
                    obtained: 80,
                    grade: "A-"
                },
                {
                    code: "BCA202",
                    name: "Object Oriented Programming",
                    fullMarks: 100,
                    obtained: 82,
                    grade: "A"
                },
                {
                    code: "BCA203",
                    name: "Statistics",
                    fullMarks: 100,
                    obtained: 78,
                    grade: "B+"
                },
                {
                    code: "BCA204",
                    name: "Computer Organization",
                    fullMarks: 100,
                    obtained: 76,
                    grade: "B+"
                },
                {
                    code: "BCA205",
                    name: "Operating System",
                    fullMarks: 100,
                    obtained: 88,
                    grade: "A"
                }
            ]
        },

        {
            semester: "3rd Semester",
            total: 422,
            percentage: "84.4%",
            gpa: "3.74",
            result: "PASS",

            subjects: [
                {
                    code: "BCA301",
                    name: "Java Programming",
                    fullMarks: 100,
                    obtained: 86,
                    grade: "A"
                },
                {
                    code: "BCA302",
                    name: "Database Management System",
                    fullMarks: 100,
                    obtained: 84,
                    grade: "A"
                },
                {
                    code: "BCA303",
                    name: "Web Technology",
                    fullMarks: 100,
                    obtained: 82,
                    grade: "A-"
                },
                {
                    code: "BCA304",
                    name: "Computer Graphics",
                    fullMarks: 100,
                    obtained: 83,
                    grade: "A-"
                },
                {
                    code: "BCA305",
                    name: "Software Engineering",
                    fullMarks: 100,
                    obtained: 87,
                    grade: "A"
                }
            ]
        },

        {
            semester: "4th Semester",
            total: 432,
            percentage: "86.4%",
            gpa: "3.82",
            result: "PASS",

            subjects: [
                {
                    code: "BCA401",
                    name: "Database Management System",
                    fullMarks: 100,
                    obtained: 88,
                    grade: "A"
                },
                {
                    code: "BCA402",
                    name: "Operating System",
                    fullMarks: 100,
                    obtained: 86,
                    grade: "A"
                },
                {
                    code: "BCA403",
                    name: "Computer Graphics",
                    fullMarks: 100,
                    obtained: 84,
                    grade: "A"
                },
                {
                    code: "BCA404",
                    name: "Web Technology II",
                    fullMarks: 100,
                    obtained: 87,
                    grade: "A"
                },
                {
                    code: "BCA405",
                    name: "Software Engineering",
                    fullMarks: 100,
                    obtained: 87,
                    grade: "A"
                }
            ]
        }
    ];


    /*
    ==========================================
    VIEW SEMESTER RESULT
    ==========================================
    */

    const viewSemesterResult = (semester) => {

        setSelectedSemester(semester);

    };


    /*
    ==========================================
    DOWNLOAD SINGLE SEMESTER PDF
    ==========================================
    */

    const downloadSemesterPDF = (semesterData) => {

        const doc = new jsPDF();

        /*
        HEADER
        */

        doc.setFontSize(20);

        doc.text(
            "Academic Result Management System",
            105,
            20,
            { align: "center" }
        );

        doc.setFontSize(15);

        doc.text(
            "Pokhara University",
            105,
            30,
            { align: "center" }
        );

        doc.setFontSize(12);

        doc.text(
            `Student Name : Hari Sharma`,
            20,
            45
        );

        doc.text(
            `Roll Number : BCA001`,
            20,
            53
        );

        doc.text(
            `Registration No : PU-2024-001`,
            20,
            61
        );

        doc.text(
            `Semester : ${semesterData.semester}`,
            20,
            69
        );

        doc.line(20, 75, 190, 75);


        /*
        SUBJECT TABLE HEADER
        */

        let y = 87;

        doc.setFontSize(10);

        doc.text("Code", 20, y);

        doc.text("Subject", 45, y);

        doc.text("Full", 125, y);

        doc.text("Obtained", 145, y);

        doc.text("Grade", 175, y);

        y += 7;

        doc.line(20, y, 190, y);

        y += 8;


        /*
        SUBJECTS
        */

        semesterData.subjects.forEach((subject) => {

            doc.text(
                subject.code,
                20,
                y
            );

            doc.text(
                subject.name,
                45,
                y
            );

            doc.text(
                String(subject.fullMarks),
                125,
                y
            );

            doc.text(
                String(subject.obtained),
                145,
                y
            );

            doc.text(
                subject.grade,
                175,
                y
            );

            y += 9;

        });


        /*
        SUMMARY
        */

        y += 5;

        doc.line(20, y, 190, y);

        y += 12;

        doc.setFontSize(12);

        doc.text(
            `Total Marks : ${semesterData.total}`,
            20,
            y
        );

        y += 9;

        doc.text(
            `Percentage : ${semesterData.percentage}`,
            20,
            y
        );

        y += 9;

        doc.text(
            `GPA : ${semesterData.gpa}`,
            20,
            y
        );

        y += 9;

        doc.text(
            `Result : ${semesterData.result}`,
            20,
            y
        );


        /*
        FOOTER
        */

        y += 20;

        doc.setFontSize(9);

        doc.text(
            "Generated by ARMS - Academic Result Management System",
            105,
            y,
            { align: "center" }
        );


        /*
        SAVE
        */

        const fileName =
            semesterData.semester
                .replace(/\s+/g, "_");

        doc.save(
            `${fileName}_Result.pdf`
        );

    };


    /*
    ==========================================
    DOWNLOAD COMPLETE ACADEMIC RESULT
    ==========================================
    */

    const downloadCompletePDF = () => {

        const doc = new jsPDF();

        let y = 20;


        /*
        MAIN HEADER
        */

        doc.setFontSize(20);

        doc.text(
            "Academic Result Management System",
            105,
            y,
            { align: "center" }
        );

        y += 10;

        doc.setFontSize(15);

        doc.text(
            "Pokhara University",
            105,
            y,
            { align: "center" }
        );

        y += 15;

        doc.setFontSize(11);

        doc.text(
            "Student Name : Hari Sharma",
            20,
            y
        );

        y += 7;

        doc.text(
            "Roll Number : BCA001",
            20,
            y
        );

        y += 7;

        doc.text(
            "Registration No : PU-2024-001",
            20,
            y
        );

        y += 15;


        /*
        ALL SEMESTERS
        */

        results.forEach((semesterData, semesterIndex) => {

            /*
            New page if necessary
            */

            if (y > 240) {

                doc.addPage();

                y = 20;

            }


            doc.setFontSize(15);

            doc.text(
                semesterData.semester,
                20,
                y
            );

            y += 10;

            doc.setFontSize(9);

            doc.text("Code", 20, y);

            doc.text("Subject", 45, y);

            doc.text("Full", 125, y);

            doc.text("Obtained", 145, y);

            doc.text("Grade", 175, y);

            y += 5;

            doc.line(20, y, 190, y);

            y += 7;


            semesterData.subjects.forEach((subject) => {

                if (y > 270) {

                    doc.addPage();

                    y = 20;

                }

                doc.text(
                    subject.code,
                    20,
                    y
                );

                doc.text(
                    subject.name,
                    45,
                    y
                );

                doc.text(
                    String(subject.fullMarks),
                    125,
                    y
                );

                doc.text(
                    String(subject.obtained),
                    145,
                    y
                );

                doc.text(
                    subject.grade,
                    175,
                    y
                );

                y += 8;

            });


            y += 5;

            doc.text(
                `Total: ${semesterData.total}`,
                20,
                y
            );

            y += 7;

            doc.text(
                `Percentage: ${semesterData.percentage}`,
                20,
                y
            );

            y += 7;

            doc.text(
                `GPA: ${semesterData.gpa}`,
                20,
                y
            );

            y += 7;

            doc.text(
                `Result: ${semesterData.result}`,
                20,
                y
            );

            y += 15;


            /*
            Separator between semesters
            */

            if (
                semesterIndex <
                results.length - 1
            ) {

                doc.line(
                    20,
                    y,
                    190,
                    y
                );

                y += 15;

            }

        });


        /*
        OVERALL RESULT
        */

        if (y > 245) {

            doc.addPage();

            y = 20;

        }

        doc.line(
            20,
            y,
            190,
            y
        );

        y += 15;

        doc.setFontSize(13);

        doc.text(
            "Overall Academic Summary",
            20,
            y
        );

        y += 10;

        doc.text(
            "Overall GPA : 3.68",
            20,
            y
        );

        y += 8;

        doc.text(
            "Overall Percentage : 83.4%",
            20,
            y
        );

        y += 8;

        doc.text(
            "Final Result : PASS",
            20,
            y
        );


        /*
        SAVE COMPLETE PDF
        */

        doc.save(
            "Hari_Sharma_Complete_Academic_Result.pdf"
        );

    };


    return (

        <DashboardLayout
            role="student"
            title="Result"
        >

            <div className="container-fluid mt-4">

                <h2 className="mb-4">
                    Semester Wise Result
                </h2>


                {/* ======================================
                    SEMESTER RESULT TABLE
                ====================================== */}

                <div className="card shadow">

                    <div className="card-header bg-success text-white">

                        <h4 className="mb-0">
                            Academic Result
                        </h4>

                    </div>


                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover text-center">

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

                                        <th>
                                            Action
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {results.map(
                                        (item, index) => (

                                            <tr key={index}>

                                                <td>
                                                    {item.semester}
                                                </td>

                                                <td>
                                                    {item.total}
                                                </td>

                                                <td>
                                                    {item.percentage}
                                                </td>

                                                <td>
                                                    {item.gpa}
                                                </td>

                                                <td>

                                                    <span
                                                        className={
                                                            item.result === "PASS"
                                                                ? "badge bg-success"
                                                                : "badge bg-danger"
                                                        }
                                                    >

                                                        {item.result}

                                                    </span>

                                                </td>

                                                <td>

                                                    <button
                                                        className="btn btn-primary btn-sm me-2"
                                                        onClick={() =>
                                                            viewSemesterResult(item)
                                                        }
                                                    >
                                                        👁 View Result
                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() =>
                                                            downloadSemesterPDF(item)
                                                        }
                                                    >
                                                        📄 PDF
                                                    </button>

                                                </td>

                                            </tr>

                                        )
                                    )}

                                </tbody>

                            </table>

                        </div>


                        {/* ======================================
                            COMPLETE RESULT DOWNLOAD
                        ====================================== */}

                        <div className="text-end mt-3">

                            <button
                                className="btn btn-dark"
                                onClick={downloadCompletePDF}
                            >

                                📄 Download Complete Academic Result

                            </button>

                        </div>

                    </div>

                </div>


                {/* ======================================
                    SELECTED SEMESTER DETAILS
                ====================================== */}

                {selectedSemester && (

                    <div className="card shadow mt-4">

                        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">

                            <h4 className="mb-0">

                                {selectedSemester.semester} Result

                            </h4>

                            <button
                                className="btn btn-light btn-sm"
                                onClick={() =>
                                    setSelectedSemester(null)
                                }
                            >

                                ✕ Close

                            </button>

                        </div>


                        <div className="card-body">

                            <div className="table-responsive">

                                <table className="table table-bordered table-hover text-center">

                                    <thead className="table-light">

                                        <tr>

                                            <th>
                                                Subject Code
                                            </th>

                                            <th>
                                                Subject Name
                                            </th>

                                            <th>
                                                Full Marks
                                            </th>

                                            <th>
                                                Obtained Marks
                                            </th>

                                            <th>
                                                Grade
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {selectedSemester.subjects.map(
                                            (subject, index) => (

                                                <tr key={index}>

                                                    <td>
                                                        {subject.code}
                                                    </td>

                                                    <td className="text-start">
                                                        {subject.name}
                                                    </td>

                                                    <td>
                                                        {subject.fullMarks}
                                                    </td>

                                                    <td>
                                                        {subject.obtained}
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


                            {/* Semester Summary */}

                            <div className="row mt-3">

                                <div className="col-md-3 mb-3">

                                    <div className="card bg-light">

                                        <div className="card-body text-center">

                                            <h6>
                                                Total Marks
                                            </h6>

                                            <h4>
                                                {selectedSemester.total}
                                            </h4>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-3 mb-3">

                                    <div className="card bg-light">

                                        <div className="card-body text-center">

                                            <h6>
                                                Percentage
                                            </h6>

                                            <h4>
                                                {selectedSemester.percentage}
                                            </h4>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-3 mb-3">

                                    <div className="card bg-light">

                                        <div className="card-body text-center">

                                            <h6>
                                                GPA
                                            </h6>

                                            <h4>
                                                {selectedSemester.gpa}
                                            </h4>

                                        </div>

                                    </div>

                                </div>


                                <div className="col-md-3 mb-3">

                                    <div className="card bg-light">

                                        <div className="card-body text-center">

                                            <h6>
                                                Result
                                            </h6>

                                            <h4 className="text-success">
                                                {selectedSemester.result}
                                            </h4>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Semester PDF */}

                            <div className="text-end">

                                <button
                                    className="btn btn-danger"
                                    onClick={() =>
                                        downloadSemesterPDF(
                                            selectedSemester
                                        )
                                    }
                                >

                                    📄 Download {selectedSemester.semester} PDF

                                </button>

                            </div>

                        </div>

                    </div>

                )}


                {/* ======================================
                    OVERALL SUMMARY
                ====================================== */}

                <div className="row mt-4">

                    <div className="col-md-3 mb-3">

                        <div className="card bg-primary text-white shadow">

                            <div className="card-body text-center">

                                <h5>
                                    Total Semesters
                                </h5>

                                <h2>
                                    4
                                </h2>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-3 mb-3">

                        <div className="card bg-success text-white shadow">

                            <div className="card-body text-center">

                                <h5>
                                    Overall GPA
                                </h5>

                                <h2>
                                    3.68
                                </h2>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-3 mb-3">

                        <div className="card bg-warning text-dark shadow">

                            <div className="card-body text-center">

                                <h5>
                                    Average %
                                </h5>

                                <h2>
                                    83.4%
                                </h2>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-3 mb-3">

                        <div className="card bg-info text-white shadow">

                            <div className="card-body text-center">

                                <h5>
                                    Status
                                </h5>

                                <h2>
                                    PASS
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </DashboardLayout>

    );

}

export default StudentResult;