import Sidebar from "../components/Sidebar";

function PendingResults(){

return(

<div className="container-fluid">

<div className="row">

<Sidebar/>

<div className="col-md-9 p-4">

<h2>Pending Results</h2>

<table className="table table-striped">

<thead>

<tr>

<th>Student</th>

<th>Semester</th>

<th>Status</th>

</tr>

</thead>

<tbody>

<tr>

<td>Samir Dhakal</td>

<td>Fourth</td>

<td className="text-danger">Pending</td>

</tr>

<tr>

<td>Ram Sharma</td>

<td>Fourth</td>

<td className="text-danger">Pending</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>

);

}

export default PendingResults;