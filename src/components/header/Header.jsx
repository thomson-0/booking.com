import "./header.css";
import { useState } from "react";
import { FaBed, FaCarSide, FaTaxi } from "react-icons/fa";
import { PiAirplaneInFlightBold } from "react-icons/pi";
import { MdOutlineAttractions } from "react-icons/md";
import { BsFillCalendarWeekFill, BsPersonFillAdd } from "react-icons/bs";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Counter from "../counter/Counter";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";

function Header({ list, type }) {
  const navigate = useNavigate();
  const [Destination, setDestination] = useState("");
  const [openOption, setOption] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [opendate, setopendate] = useState(false);
  

  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  function handleSerch() {
    navigate("./hotels", {
      state: { Destination, date, children, adults, rooms },
    });
  }

  return (
    <div className="header">
      <div className={type === "list" ? " listmode " : "headercontainer"}>
        <div className="headeritem">
          <div className="headerlist active">
            <FaBed />
            <span>Stays </span>
          </div>
          <div className="headerlist">
            <PiAirplaneInFlightBold />
            <span>Flight </span>
          </div>
          <div className="headerlist">
            <FaCarSide />
            <span>Car </span>
          </div>
          <div className="headerlist">
            <MdOutlineAttractions />
            <span>Attraction </span>
          </div>
          <div className="headerlist">
            <FaTaxi />
            <span>Airport Taxi </span>
          </div>
        </div>
        <div>
          {type !== "list" && (
            <div>
              <div className="content">
                <h1 className="headerTitle">
                  A lifetime of discounts? It's Genius.
                </h1>
                <p className="headerDesc">
                  Get rewarded for your travels – unlock instant savings of 10%
                  or more with a free Lamabooking account
                </p>
                <button className="headerBtn">Sign in / Register</button>
              </div>
              <div className="inputContain">
                <div className="wrapper">
                  <div className="searchitem">
                    <FaBed className="icon" />
                    <input
                      type="text"
                      placeholder="Where are you going?"
                      className="headerSearchInput"
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                  <div className="searchitem">
                    <BsFillCalendarWeekFill className="icon" />
                    <span
                      onClick={() => setopendate(!opendate)}
                      className="headerSearchText"
                    >
                      {" "}
                      {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                      )}`}
                    </span>
                  </div>
                  {opendate && (
                    <DateRange
                      className="date"
                      editableDateInputs={true}
                      onChange={(item) => setdate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}

                  

                  <div className="searchitem">
                    <BsPersonFillAdd className="icon" />
                    <span
                      onClick={() => setOption(!openOption)}
                      className="headerSearchText"
                    >
                      {adults} Adults {children} Children {rooms} Room
                    </span>
                    {openOption && (
                      <Counter
                        rooms={rooms}
                        adults={adults}
                        children={children}
                        setRooms={setRooms}
                        setAdults={setAdults}
                        setChildren={setChildren}
                      />
                    )}
                  </div>
                  <div className="searchitem">
                    <button className="serchBtn" onClick={handleSerch}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
