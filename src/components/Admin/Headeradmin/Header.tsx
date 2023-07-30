import './headeradmin.css'

const Headeradmin = () => {
  return (
    <div>
      <div className="hdadmin">
        <div className="lgadmin">
          <img src="https://data.thefeedfeed.com/static/2023/04/11/16812009276435171feac77.jpg" alt="" />
        </div>
        <div className="optionadmin">
          <div className="adminimg">
            <div>Admin Dashboard</div>
           <a href="http://localhost:5173/"> <img className='out' src="https://cdn.icon-icons.com/icons2/1381/PNG/96/systemlogout_94057.png" alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headeradmin