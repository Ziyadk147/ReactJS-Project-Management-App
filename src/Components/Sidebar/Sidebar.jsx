import NewProject from "../NewProject/NewProject.jsx";
import {useRef} from "react";

export default function Sidebar(){
    const modalRef = useRef();
    function handleModalOpen(){
        modalRef.current.trigger()
    }

    return (
        <aside className={"w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"}>
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <button onClick={handleModalOpen} className={"px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"}>+New Project</button>
            <NewProject ref={modalRef} />
            <ul className={"mt-8"}>
                <li className={"flex justify-between "}>
                    <button className={"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"}>
                        Project 1
                    </button>

                </li>
                <li className={"flex justify-between "}>
                    <button className={"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"}>
                        Project 1
                    </button>

                </li>
            </ul>
        </aside>
    )



}