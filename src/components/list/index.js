import { useState } from "react";
import { InputText } from "../common/form";
import Items from "./items";

let n = 0;

const List = () => {
  const [title, updateTitle] = useState("");
  const [items, updateItems] = useState([]);

  return (
    <div className="border rounded shadow my-3 p-3">
      <h3 className="text-center mb-2">New list</h3>
      <InputText title="title" value={title} changeHandler={updateTitle} />

      <Items items={items} updateItems={updateItems} key={++n} />

      <div className="my-3 text-center">
        <button className="btn btn-outline-primary">Save</button>
        <button className="btn btn-outline-secondary ml-3">Discard</button>
      </div>
    </div>
  );
};

export default List;
