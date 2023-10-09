import { useLocation } from 'react-router-dom'
import NavBar from '../../components/Navbar/NavBar'
import Header from '../../components/header/Header'
import './list.css'
import { format } from 'date-fns';
import { useState } from 'react'
import { DateRange } from 'react-date-range';
import Search from '../../components/Searchitm/Search';

function List() {

  const location = useLocation()
  const [Destination, setDestination] = useState(location.state.Destination)
  const [date, setdate] = useState(location.state.date)
  const [rooms, setrooms] = useState(location.state.rooms)
  const [adults, setadults] = useState(location.state.adults)
  const [children, setchildren] = useState(location.state.children)

  
  const [opendate, setopendate] = useState(false)


  return (
    <div>
        <NavBar/>
       <Header  type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={Destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setopendate(!opendate)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {opendate && <DateRange
                   className='date'
  onChange={item => setdate([item.selection])}
  minDate={new Date()}
  ranges={date}

/>}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={adults}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={rooms}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
            <Search/>
          </div>
         
        </div>
      </div>

      
    </div>


  );
};

export default List;