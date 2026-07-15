import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import FeatureCard from "../components/FeatureCard";

function TeacherDashboard() {

    return (

        <div className="container-fluid">

            <div className="row">

                <Sidebar />

                <div className="col-md-9 p-4">

                    <Navbar />

                    <div className="row mt-4">

                        <DashboardCard
                            title="Total Students"
                            value="120"
                        />

                        <DashboardCard
                            title="Subjects"
                            value="6"
                        />

                        <DashboardCard
                            title="Pending Results"
                            value="18"
                            color="text-danger"
                        />

                    </div>

                    <h3 className="mt-5">

                        Teacher Functions

                    </h3>

                    <div className="row mt-3">

                        <FeatureCard
                            title="👨‍🎓 Add Student"
                            description="Register new student."
                            button="Open"
                            btnClass="btn btn-primary"
                        />

                        <FeatureCard
                            title="📚 Insert Subject"
                            description="Insert Semester Subjects."
                            button="Open"
                            btnClass="btn btn-success"
                        />

                        <FeatureCard
                            title="📝 Update Marks"
                            description="Update Student Marks."
                            button="Open"
                            btnClass="btn btn-warning"
                        />

                        <FeatureCard
                            title="📄 Generate Marksheet"
                            description="Generate Student Result."
                            button="Open"
                            btnClass="btn btn-danger"
                        />

                    </div>

                </div>

            </div>

        </div>

    );

}

export default TeacherDashboard;