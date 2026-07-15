import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TeacherLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    function teacherLogin() {

        if (email === "teacher@gmail.com" && password === "teacher123") {

            navigate("/teacher-dashboard");

        }

        else {

            setError("Invalid Email or Password");

        }

    }

    return (

        <div className="login-bg">

            <div className="container">

                <div className="row justify-content-center align-items-center vh-100">

                    <div className="col-md-5">

                        <div className="card login-card shadow-lg">

                            <div className="card-body p-5">

                                <h2 className="text-center">
                                    👨‍🏫 Teacher Login
                                </h2>

                                <p className="text-center text-muted">
                                    Academic Result Management System
                                </p>

                                <hr />

                                <div className="mb-3">

                                    <label>Email</label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="teacher@gmail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                </div>

                                <div className="mb-3">

                                    <label>Password</label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="********"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </div>

                                <button
                                    className="btn btn-success w-100"
                                    onClick={teacherLogin}
                                >

                                    Login

                                </button>

                                <p className="text-danger mt-3 text-center">

                                    {error}

                                </p>

                                <div className="text-center mt-4">

                                    <small>

                                        Demo Login

                                        <br />

                                        teacher@gmail.com

                                        <br />

                                        teacher123

                                    </small>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default TeacherLogin;