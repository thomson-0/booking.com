import './counter.css'

function Counter({ rooms, adults, children, setRooms, setAdults, setChildren }) {
  const handleIncrement = (setter) => {
    setter((prevValue) => prevValue + 1);
  };

  const handleDecrement = (setter) => {
    setter((prevValue) => Math.max(prevValue - 1, 1));
  };

  return (
    <div className="room-counter">
     

      <div className="counter">
        <label>Adults:</label>
        <div className="btn">
        <button onClick={() => handleDecrement(setAdults)}>-</button>
        <span>{adults}</span>
        <button onClick={() => handleIncrement(setAdults)}>+</button>
        </div>
      </div>

      <div className="counter">
        <label>Children:</label>
        <div className="btn">
        <button onClick={() => handleDecrement(setChildren)}>-</button>
        <span>{children}</span>
        <button onClick={() => handleIncrement(setChildren)}>+</button>
        </div>
      </div>
      <div className="counter">
        <label>Rooms:</label>
        <div className="btn">
        <button onClick={() => handleDecrement(setRooms)}>-</button>
        <span>{rooms}</span>
        <button onClick={() => handleIncrement(setRooms)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
