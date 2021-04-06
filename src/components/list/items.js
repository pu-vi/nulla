import { useState } from "react";
import { Badge } from "../common/display";
import AddItem from "./add_item";

const Items = ({ items = [], updateItems }) => {
  return (
    <>
      <ul>
        {items.map((i, index) => (
          <li key={index} className="my-2">
            <Badge value={i} remove={() => {}} />
          </li>
        ))}
      </ul>

      <AddItem items={items} updateItems={updateItems} />
    </>
  );
};

export default Items;
