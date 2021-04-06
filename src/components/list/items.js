import { useState } from "react";
import { InputText } from "../common/form";
import { ImCheckmark, ImCross } from "react-icons/im";
import { Badge } from "../common/display";

const Items = ({ items = [], updateItems }) => {
  const [item, updateItem] = useState("");

  const addToList = () => {
    updateItems([...items, item]);
  };

  return (
    <>
      <ul>
        {items.map((i, index) => (
          <li key={index}>
            <Badge value={i} remove={() => {}} />
          </li>
        ))}
      </ul>

      <div className="form-inline mt-5">
        <InputText
          value={item}
          className="form-control-sm"
          changeHandler={updateItem}
          placeholder="List item"
        />

        <div className="form-group">
          <button
            className="btn btn-sm btn-outline-success border-0 ml-2"
            onClick={addToList}
          >
            <ImCheckmark />
          </button>
          <button
            className="btn btn-sm btn-outline-danger border-0 ml-2"
            onClick={(e) => {
              updateItem("");
            }}
          >
            <ImCross />
          </button>
        </div>
      </div>
    </>
  );
};

export default Items;
