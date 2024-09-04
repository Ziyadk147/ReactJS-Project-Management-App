import {useRef} from "react";

export default  function Task( {handleTaskCreation , project ,  Tasks , handleTaskDeletion} ){
    const inputRef = useRef();

    function handleClick(){
        if(inputRef.current.value !== "") {

            handleTaskCreation(inputRef.current.value , project)
            inputRef.current.value = "";
        }
    }

    return (
        <div className=" h-fit  ">
            <div className=" mt-8 flex flex-row justify-between gap-4">
                <h2 className="text-5xl font-bold text-stone-700 mb-4">Tasks</h2>
            </div>
            <div className=" mt-8 flex flex-row justify-start gap-4">
                <input ref={inputRef} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
                <button
                    onClick={handleClick}
                    className=" bg-stone-600 rounded-md p-3 text-stone-200 font-bold hover:text-stone-800 hover:bg-stone-200">Add
                    Task
                </button>
            </div>
            {Tasks && (
                <ul className={ "p-4 mt-8 rounded-md bg-stone-100" }>
                    {Tasks.map((Task, TaskIndex) => (
                        <li key={TaskIndex} className="flex justify-between ">
                            <p className="text-stone-800 my-4">
                                {Task}
                            </p>
                            <button onClick={() => {
                                handleTaskDeletion(Task, project)
                            }}>Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}