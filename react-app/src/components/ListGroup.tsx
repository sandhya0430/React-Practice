//import { Fragment } from "react";
import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  //let selectedIndex = 0;
  const [selelctedIndex, setSelectedIndex] = useState(-1);

  // arr[0]//varaiable(selectedIndex)
  // arr[1]//function(setSelectedIndex)
  //Event handler
  const handleClick = () => (event: MouseEvent) => console.log(event);
  //items = [];
  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items</p>
  //     </>
  //   );
  // }

  // const message = items.length === 0 ? <p>No item</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No item</p> : null} */}
      {/* {message} */}
      {/* {getMessage()} */}
      {/* {items.length === 0 && <p>No item found</p>} */}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}

        {/* {items.map((item) => (
          <li>{item}</li>
        ))} */}
        {/* rendering items */}
        {/* {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          > */}
        {/* {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={(event) => console.log(event)}
            onClick={handleClick}// we are not calling it we are just passing as reference
          >
            {item}
          </li> */}
        {items.map((item, index) => (
          <li
            //className="list-group-item active"//(active to highlight)

            className={
              index === selelctedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
//in react component cannot return multiple elements, so we wrap them in a div
