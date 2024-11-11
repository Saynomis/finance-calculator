import { IoMdAddCircle } from "react-icons/io";

export default function UserInput({ user, onClick, value, onChange }) {
  return (
    <div className="input-container">
      <h1 id="user-emoji">{user}</h1>
      <div className="input-button-wrapper">
        <input
          id="money-input"
          type="number"
          value={value}
          onChange={onChange}
        />
        <button id="input-button" onClick={value > 0 ? onClick : null}>
          <IoMdAddCircle />
        </button>
      </div>
    </div>
  );
}
