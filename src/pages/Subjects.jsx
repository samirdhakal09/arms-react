import Sidebar from "../components/Sidebar";

function Subjects() {

    return (

        <div className="container-fluid">

            <div className="row">

                <Sidebar />

                <div className="col-md-9 p-4">

                    <h2>Subjects</h2>

                    <table className="table table-bordered mt-4">

                        <thead>

                            <tr>

                                <th>Subject</th>

                                <th>Semester</th>

                                <th>Credit</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Web Technology</td>

                                <td>Fourth</td>

                                <td>3</td>

                            </tr>

                            <tr>

                                <td>DBMS</td>

                                <td>Fourth</td>

                                <td>3</td>

                            </tr>

                            <tr>

                                <td>Software Engineering</td>

                                <td>Fourth</td>

                                <td>3</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Subjects;