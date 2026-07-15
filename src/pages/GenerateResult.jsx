import Sidebar from "../components/Sidebar";

function GenerateResult(){

return(

<div className="container-fluid">

<div className="row">

<Sidebar/>

<div className="col-md-9 p-4">

<h2>Generate Result</h2>

<div className="card p-4">

<h4>Student Result</h4>

<p>Name : Samir Dhakal</p>

<p>Semester : Fourth</p>

<p>Status : PASS</p>

<button className="btn btn-success">

Generate PDF

</button>

</div>

</div>

</div>

</div>

);

}

export default GenerateResult;