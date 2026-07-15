import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    function login() {

        if (
            email === "admin@gmail.com" &&
            password === "admin123"
        ) {

            navigate("/admin-dashboard");

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
                                    Admin Login
                                </h2>

                                <hr />

                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button
                                    className="btn btn-primary w-100"
                                    onClick={login}
                                >
                                    Login
                                </button>

                                <p className="text-danger mt-3">
                                    {error}
                                </p>

                                <hr />

                                <small>

                                    Demo Login

                                    <br />

                                    admin@gmail.com

                                    <br />

                                    admin123

                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AdminLogin;