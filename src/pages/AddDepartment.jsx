import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function AddDepartment() {

    const [department,setDepartment]=useState({
        name:"",
        code:"",
        hod:""
    });

    function handleChange(e){

        setDepartment({
            ...department,
            [e.target.name]:e.target.value
        });

    }

    function saveDepartment(e){

        e.preventDefault();

        alert("Department Added Successfully");

        console.log(department);

        setDepartment({
            name:"",
            code:"",
            hod:""
        });

    }

    return(

        <>
        <Sidebar/>

        <div className="main">

            <Navbar/>

            <div className="container mt-4">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white">

                        <h3>Add Department</h3>

                    </div>

                    <div className="card-body">

                        <form onSubmit={saveDepartment}>

                            <div className="mb-3">

                                <label>Department Name</label>

                                <input
                                className="form-control"
                                name="name"
                                value={department.name}
                                onChange={handleChange}
                                required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Department Code</label>

                                <input
                                className="form-control"
                                name="code"
                                value={department.code}
                                onChange={handleChange}
                                required
                                />

                            </div>

                            <div className="mb-3">

                                <label>Head of Department</label>

                                <input
                                className="form-control"
                                name="hod"
                                value={department.hod}
                                onChange={handleChange}
                                required
                                />

                            </div>

                            <button className="btn btn-success">

                                Save Department

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

        </>

    );

}

export default AddDepartment;