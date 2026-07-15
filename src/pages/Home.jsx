import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="login-bg">

      <div className="container py-5">

        {/* Header */}
        <div className="text-center text-white mb-5">
          <h1 className="display-3 fw-bold">🎓 ARMS</h1>
          <h3>Academic Result Management System</h3>
          <p className="lead">Pokhara University</p>
          <p>Select your role to continue</p>
        </div>

        <div className="row justify-content-center">

          {/* ADMIN */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow h-100 role-card">
              <div className="card-body text-center">

                <div style={{ fontSize: "70px" }}>👨‍💼</div>

                <h3>ADMIN</h3>

                <hr />

                <p>
                  • Manage Teachers
                  <br />
                  • Manage Subjects
                  <br />
                  • Manage Departments
                  <br />
                  • Generate Reports
                </p>

                <Link
                  to="/admin-login"
                  className="btn btn-primary w-100 mt-3"
                >
                  Login as Admin
                </Link>

              </div>
            </div>
          </div>

          {/* TEACHER */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow h-100 role-card">
              <div className="card-body text-center">

                <div style={{ fontSize: "70px" }}>👨‍🏫</div>

                <h3>TEACHER</h3>

                <hr />

                <p>
                  • Update Marks
                  <br />
                  • Manage Students
                  <br />
                  • Publish Results
                </p>

                <button
                  className="btn btn-success w-100 mt-3"
                  disabled
                >
                  Coming Soon
                </button>

              </div>
            </div>
          </div>

          {/* STUDENT */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow h-100 role-card">
              <div className="card-body text-center">

                <div style={{ fontSize: "70px" }}>👨‍🎓</div>

                <h3>STUDENT</h3>

                <hr />

                <p>
                  • View Results
                  <br />
                  • Academic Profile
                  <br />
                  • Download Marksheet
                </p>

                <button
                  className="btn btn-secondary w-100 mt-3"
                  disabled
                >
                  Coming Soon
                </button>

              </div>
            </div>
          </div>

        </div>

        <div className="text-center text-white mt-5">
          <small>
            © 2026 Academic Result Management System | Pokhara University
          </small>
        </div>

      </div>

    </div>
  );
}

export default Home;