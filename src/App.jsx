import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const deleteItems = (indexToDelete) => {
    setItems((prev) => prev.filter((item, index) => index !== indexToDelete));
  };

  const addItems = () => {
    if (inputValue.trim() !== "") {
      setItems((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  const editItem = (indexofItem) => {
    setInputValue(items[indexofItem]);
    setItems((prev) => prev.filter((item, index) => index !== indexofItem));
  };
  return (
    <>
      <div className="container w-2/3 w-[50%] mx-auto">
        <div className="w-[50%] mx-auto border rounded-md p-5 border-blue-600 flex flex-col my-12 bg-purple-200 ">
          <h1 className="my-2 mx-auto font-bold underline">TODO APP</h1>

          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            placeholder="Enter a task"
            className="border w-[50%] mx-20 my-2 border-gray-300"
          />
          <button
            onClick={addItems}
            className="mx-2 bg-purple-700 px-2 text-white rounded-full font-bold"
          >
            Add
          </button>
          <h2 className="font-semibold my-2 underline">Your tasks</h2>
          {items.length != 0 ? (
            <ul className="list-disc">
              {items.map((item, index) => (
                <li className="my-2 mx-4" key={index}>
                  {item}
                  <button
                    onClick={() => {
                      editItem(index);
                    }}
                    className="mx-2 bg-yellow-400 px-2 rounded-full font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteItems(index);
                    }}
                    className="mx-2 bg-red-400 px-2 rounded-full font-bold"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            "No tasks to display"
          )}
        </div>
      </div>
    </>
  );
}

export default App;
