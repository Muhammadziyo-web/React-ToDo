import React ,{useState} from "react"; 

function Input(props) {
    // console.log(promps);

    // console.log(data);
    const [input, setInput] = useState();
    return (
        <>
            <div className="form-outline border add-todo">
                <input type="text" id="form9Example1" className="form-control inpur" onInput={e => setInput(e.target.value)} />
                <label className="form-label" htmlFor="form9Example1">Add new todo</label>
            </div>
        </>
    );
}

export default Input;