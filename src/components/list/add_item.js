import { InputText } from "../common/form";
import { ImCheckmark, ImCross } from "react-icons/im";
import { useState } from "react";

const AddItem = ({ items, updateItems }) => {
  const [item, updateItem] = useState("");

  const addToList = () => {
    updateItems([...items, item]);
  };

  return (
    <form>
      <div className="form-inline mt-5">
        <InputText
          value={item}
          className="form-control-sm"
          changeHandler={updateItem}
          placeholder="List item"
        />

        <div className="form-group">
          <button
            type="submit"
            className="btn btn-sm btn-outline-success border-0 ml-2"
            onClick={addToList}
          >
            <ImCheckmark />
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger border-0 ml-2"
            onClick={(e) => {
              updateItem("");
            }}
          >
            <ImCross />
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddItem;
