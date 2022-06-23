import React, { useState } from 'react';
export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or description can not be blank")
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3 py-2">
                    {/* <label htmlFor="title" className="form-label">Titile</label> */}
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder='Enter Small Title'
                    />
                </div>
                <div className="mb-3">
                    {/* <label htmlFor="desc" className="form-label">Description</label> */}
                    {/* <input
                        type="text"
                        value={desc}
                        onChange={(e)=>setDesc(e.target.value)}
                        className="form-control"
                        id="desc"
                    /> */}

                    <textarea
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="form-control"
                        id="desc"
                        placeholder='Enter Description'
                    />
                </div>
                <button type="submit" className="btn btn-outline-success">
                    Add Task
                </button>
            </form>
        </div>
    );
};
