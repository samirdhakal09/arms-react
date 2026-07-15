function DashboardCard({ title, value, color }) {

  return (

    <div className="col-md-3">

      <div className={`card card-box text-white bg-${color}`}>

        <div className="card-body">

          <h5>{title}</h5>

          <h2>{value}</h2>

        </div>

      </div>

    </div>

  );

}

export default DashboardCard;