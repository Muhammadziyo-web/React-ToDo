import { v4 as uuidv4 } from 'uuid';

function Todos(datass) {

    let { data: { todos, delFunc, bookFunc, bookmark, checkbox, complatedArr, checkboxC,setTodo } } = datass

    let datas = todos
    console.log(bookmark);



    return (
        <>
            {/* <table className="table table-striped table-hover w-75 mx-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Delete</th>
                    </tr>
                </thead> */}
            <div>
                {
                    datas.map((e, i) => {
                        if (!e.isComp) {


                            return (<div key={uuidv4()} className='todo-s' id={e.id}>
                                <div className="right-wrapper">
                                    <input type="checkbox" onClick={() => {
                                        checkbox(e.id, i)
                                        document.querySelector('.checkbox-sound').play()
                                    }} />
                                    <p>{e.Tname}</p>
                                </div>
                                {/* <td>{e.time}</td> */}
                                <div className='btn-td'>
                                    {/* <i className="fa-regular fa-star" id='star-btn' onClick={(e) => {
                                        e.target.classList.toggle('fa-solid')
                                        console.log(e.target);
                                        bookFunc(i)
                                    }}></i> */}
                                    <span className="del-btn" id={i + 1} onClick={() => {
                                        delFunc(e.id);
                                        document.querySelector('.del-sound').play()
                                    }}><i className="fa-solid fa-trash"></i></span>
                                </div>
                            </div>)
                        }
                    })}


                <div class="accordion d-none" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Done {complatedArr.length}
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {complatedArr.map((e, i) => {
                                    return (
                                        <div key={uuidv4()} className='todo-s comp-todo' id={e.id}>
                                            <div className="right-wrapper">
                                                <input type="checkbox" defaultChecked onChange={
                                                    (ev) => {
                                                        document.querySelector('.checkbox-sound').play()

                                                        e.isComp = false
                                                        checkboxC(e.id, i)
                                                        setTodo([...todos,e])
                                                        console.log(ev.target);
                                                    }
                                                } />
                                                <p className='comp'>{e.Tname}</p>
                                            </div>
                                            {/* <td>{e.time}</td> */}
                                            <div className='btn-td'>
                                                {/* <i className="fa-regular fa-star" id='star-btn' onClick={(e) => {
                                                    e.target.classList.toggle('fa-solid')
                                                    console.log(e.target);
                                                    bookFunc(i)
                                                }}></i> */}
                                                <span className="del-btn" id={i + 1} onClick={() => {
                                                    document.querySelector('.del-sound').play()

                                                    delFunc(e.id)
                                                    e.isComp = false
                                                    checkboxC(e.id, i)
                                                }}><i className="fa-solid fa-trash"></i></span>
                                            </div>
                                        </div>)
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* </table> */}

        </>



    );
}

export default Todos;
