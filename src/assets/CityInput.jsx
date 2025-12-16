import {useContext} from "react";
import WeatherContext from "./WeatherContext";

export default function  CityInput({ label, value, onChange, placeholder }) {
  useContext(WeatherContext);
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
      {/* <div className="current-value">Current: {value}</div> */}
    </div>
  );
}
