import Sidebar from "../components/Sidebar";

function UpdateMarks(){

return(

<div className="container-fluid">

<div className="row">

<Sidebar/>

<div className="col-md-9 p-4">

<h2>Update Marks</h2>

<form>

<input
className="form-control mb-3"
placeholder="Student Name"
/>

<input
className="form-control mb-3"
placeholder="Subject"
/>

<input
className="form-control mb-3"
placeholder="Theory Marks"
/>

<input
className="form-control mb-3"
placeholder="Practical Marks"
/>

<button className="btn btn-primary">

Save Marks

</button>

</form>

</div>

</div>

</div>

);

}

export default UpdateMarks;