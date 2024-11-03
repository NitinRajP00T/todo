
import { useState } from "react";
import TodoItem from "./ToDoItem";
import "./ToDoList.css";
import { SquarePen, Trash2, Plus, Scan, CircleCheckBig } from "lucide-react";

function ToDoList() {
    const [items, setItems] = useState([]);
    const [enteredItem, setEnteredItem] = useState("");
    const [checkedItems, setCheckedItems] = useState({});

    const addItem = () => {
        if (enteredItem.trim() && !items.includes(enteredItem.trim())) {
            setItems([...items, enteredItem]);
            setEnteredItem("");
        } else if (items.includes(enteredItem.trim())) {
            alert("Task is already in the list!");
            setEnteredItem("");
        }
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);

        const updatedCheckedItems = { ...checkedItems };
        delete updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    const handleEdit = (index) => {
        const itemToEdit = items[index];
        setEnteredItem(itemToEdit);
        deleteItem(index);
    };

    const handleChecked = (index) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [index]: !prevCheckedItems[index]
        }));
    };

    return (
        <>
            <div className="container">
                <input
                    type="text"
                    placeholder="Enter a list item"
                    value={enteredItem}
                    onChange={(e) => setEnteredItem(e.target.value)}
                />
                <button onClick={addItem} className="addbtn">
                    <Plus size={35} strokeWidth={3} />
                </button>
            </div>

            <ul>
                {items.map((task, index) => (
                    <TodoItem 
                        key={index} 
                        task={task} 
                        index={index} 
                        handleChecked={() => handleChecked(index)} 
                        handleEdit={handleEdit} 
                        deleteItem={deleteItem} 
                        checked={checkedItems[index]} 
                    />
                ))}
            </ul>
        </>
    );
}

export default ToDoList;
