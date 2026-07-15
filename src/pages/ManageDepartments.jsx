import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function ManageDepartments(){

const [departments,setDepartments]=useState([

{
id:1,
name:"BCA",
code:"BCA",
hod:"Ram Sharma"
},

{
id:2,
name:"BBA",
code:"BBA",
hod:"Hari KC"
},

{
id:3,
name:"BHM",
code:"BHM",
hod:"Sita Nepal"
}

]);

const [editing,setEditing]=useState(null);

function handleChange(e){

setEditing({

...editing,

[e.target.name]:e.target.value

});

}

function save(){

setDepartments(

departments.map(d=>

d.id===editing.id?editing:d

)

);

alert("Department Updated");

setEditing(null);

}

function remove(id){

if(window.confirm("Delete Department?")){

setDepartments(

departments.filter(d=>d.id!==id)

);

}

}

return(

<>

<Sidebar/>

<div className="main">

<Navbar/>

<div className="container mt-4">

<div className="card shadow">

<div className="card-header bg-success text-white">

<h3>Manage Departments</h3>

</div>

<div className="card-body">

<table className="table table-bordered">

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Code</th>

<th>HOD</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{

departments.map(dep=>(

<tr key={dep.id}>

<td>{dep.id}</td>

<td>{dep.name}</td>

<td>{dep.code}</td>

<td>{dep.hod}</td>

<td>

<button
className="btn btn-warning btn-sm me-2"
onClick={()=>setEditing(dep)}
>

Edit

</button>

<button
className="btn btn-danger btn-sm"
onClick={()=>remove(dep.id)}
>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

</div>

{

editing &&

<div className="card shadow mt-4">

<div className="card-header bg-primary text-white">

<h4>Edit Department</h4>

</div>

<div className="card-body">

<input
className="form-control mb-3"
name="name"
value={editing.name}
onChange={handleChange}
/>

<input
className="form-control mb-3"
name="code"
value={editing.code}
onChange={handleChange}
/>

<input
className="form-control mb-3"
name="hod"
value={editing.hod}
onChange={handleChange}
/>

<button
className="btn btn-success me-2"
onClick={save}
>

Save

</button>

<button
className="btn btn-secondary"
onClick={()=>setEditing(null)}
>

Cancel

</button>

</div>

</div>

}

</div>

</div>

</>

);

}

export default ManageDepartments;