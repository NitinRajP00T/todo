
// import React from 'react';
// import { SquarePen, Trash2, Scan, CircleCheckBig } from 'lucide-react';

// const TodoItem = ({ task, index, handleChecked, handleEdit, deleteItem, checked }) => {
//   return (
//     <li key={index} className="list" onClick={handleChecked}>
//       <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>{task}</span>
//       <div>
//         <button className={`btnContainer ${checked ? 'scan' : 'circlecheching'}`}>
//           {checked ? (
//             <CircleCheckBig className="circlechecking" size={28} color="#23f207" strokeWidth={3} />
//           ) : (
//             <Scan className="scan" size={28} color="rgb(255, 238, 0)" strokeWidth={4} />
//           )}
//         </button>

//         <button onClick={() => handleEdit(index)}>
//           <SquarePen size={28} color="#16eefe" strokeWidth={1.25} />
//         </button>
//         <button onClick={() => deleteItem(index)}>
//           <Trash2 size={28} color="#16eefe" strokeWidth={1.25} />
//         </button>
//       </div>
//     </li>
//   );
// };

// export default TodoItem;
import React from 'react';
import { SquarePen, Trash2, Scan, CircleCheckBig } from 'lucide-react';

const TodoItem = ({ task, index, handleChecked, handleEdit, deleteItem, checked }) => {
    return (
        <li className="list">
            <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>{task}</span>
            <div>
                <button onClick={handleChecked} className={`btnContainer ${checked ? 'scan' : 'circlechecking'}`}>
                    {checked ? (
                        <CircleCheckBig className="circlechecking" size={28} color="#23f207" strokeWidth={3} />
                    ) : (
                        <Scan className="scan" size={28} color="rgb(255, 238, 0)" strokeWidth={4} />
                    )}
                </button>

                <button onClick={() => handleEdit(index)}>
                    <SquarePen size={28} color="#16eefe" strokeWidth={1.25} />
                </button>
                <button onClick={() => deleteItem(index)}>
                    <Trash2 size={28} color="#16eefe" strokeWidth={1.25} />
                </button>
            </div>
        </li>
    );
};

export default TodoItem;
