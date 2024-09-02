import NewProject from "../NewProject/NewProject.jsx";
import {useRef, useState} from "react";

export default function Sidebar(){
    const modalRef = useRef();
    const [projects , setProjects] = useState([])
    function handleModalOpen(){
        modalRef.current.trigger()
    }
    function handleProjectCreation(project){
        setProjects( (prevState) => [...prevState , project] )
    }

    return (
        <aside className={"w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"}>
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
                Your Projects
            </h2>
            <button onClick={handleModalOpen}
                    className={"px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"}>+New
                Project
            </button>
            <NewProject ref={modalRef} onSave={handleProjectCreation}/>
            <ul className={"mt-8"}>
                {projects.map((project , projectIndex) => (
                    <li className={"flex justify-between "} key={projectIndex}>
                        <button
                            className={"w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"}>
                            {project.title ?? ""}
                        </button>
                    </li>

                ))}
            </ul>

        </aside>
    )


}