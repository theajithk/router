import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Content = ({items,handleChange,handleClick}) => {
    


    return (
        <main>
            {(items.length)?(
            <ul>
                {items.map((item) => (
                    <li className='item' key={item.id}>
                        <input
                            type="checkbox"
                            onChange={() => handleChange(item.id)}
                            checked={item.checked}
                        />
                        <label
                        style={(item.checked)?{textDecoration:"line-through"}:null} 
                        onDoubleClick={() => handleChange(item.id)}>
                            {item.item}
                        </label>
                        <FaRegTrashAlt 
                            role='button'
                            onClick={()=>handleClick(item.id)}
                            tabIndex="0" 
                        />
                    </li>
                ))}
            </ul>
            ):(<p>You List is Empty</p>)}
        </main>
    );
};

export default Content;
