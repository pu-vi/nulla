import { getUid } from "../utils/random";

export const InputText = ({
  title = "",
  placeholder = "",
  value,
  className = "",
  changeHandler,
  id = getUid()
}) => (
  <div className="form-group">
    {title && (
      <label htmlFor={id}>
        <strong>{title}</strong>
      </label>
    )}

    <input
      type="text"
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={(e) => {
        changeHandler(e.target.value);
      }}
      className={`form-control ${className}`}
    />
  </div>
);
