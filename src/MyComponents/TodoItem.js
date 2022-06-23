import React from 'react'
import { FaTrash, FaRegCheckCircle } from "react-icons/fa";

export const TodoItem = ({ todo, onDelete, onMark }) => {

    return (
        <>

            <div className=''>
                <div className="">
                    <ul className="list-group my-3 ">
                        <li className="list-group-item">
                            <div className="row">
                                {todo.mark === "Pending" ?

                                    <div className="col-xl-2"><h4><FaRegCheckCircle onClick={() => { onMark(todo) }} style={{color: "red"}} /></h4></div>

                                    :

                                    <div className="col-xl-2"><h4><FaRegCheckCircle style={{color: "green"}} /></h4></div>}

                                <div className="col-xl-8"><h3 className='ext-center'>{todo.title}</h3></div>

                                {todo.mark !== "Pending" ?
                                    <div className="col-xl-2"><h5><FaTrash onClick={() => { onDelete(todo) }} style={{color: "red"}}/></h5></div>
                                    :
                                    ""}
                            </div>

                        </li>
                        <li className="list-group-item backcss">
                            <p className='p-2'>{todo.desc}</p>


                        </li>


                    </ul>
                </div>
                <div className="">

                </div>

            </div>

        </>
    )
}
