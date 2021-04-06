import { InputText } from "../common/form";
import { ImCheckmark, ImCross } from "react-icons/im";
import { useState } from "react";

const AddItem = ({ items, updateItems }) => {
  const [item, updateItem] = useState("");

  const addToList = () => {
    updateItems([...items, item]);
  };

  return (
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
  );
};

export default AddItem;
