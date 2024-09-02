export default function Home({project}) {
    let homeBody
    if(project){
        homeBody = (
           <div className={"w-2/3"}>
            <header className="  h-fit  border-b-2 border-stone-300">
                <div className="mt-24  flex flex-row justify-between gap-4">
                    <h2 className="text-5xl font-bold text-stone-700 mb-4">{project.title}</h2>
                    <button className={"text-stone-700 hover:text-stone-950"}>Delete</button>
                </div>
                <div className=" flex flex-row justify-between gap-4">
                    <p className="text-stone-400 font-bold pl-1 mb-4">{project.dueDate}</p>
                </div>
                <div className=" flex flex-row justify-between gap-4">
                    <p className="text-stone-800 my-4">
                        {project.description}
                    </p>
                </div>
            </header>
            <div className=" h-fit  ">
                <div className=" mt-8 flex flex-row justify-between gap-4">
                    <h2 className="text-5xl font-bold text-stone-700 mb-4">Tasks</h2>
                </div>
                <div className=" mt-8 flex flex-row justify-start gap-4">
                    <input className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
                    <button className=" bg-stone-600 rounded-md p-3 text-stone-200 font-bold hover:text-stone-800 hover:bg-stone-200">Add Task</button>
                </div>

            </div>
        </div>
        )
    }
    else{
         homeBody = (
             <div className="flex text-center items-center justify-center w-10/12   ">
                 <h2 className="text-5xl font-bold  text-stone-700 mb-4">Please Select a Project</h2>
             </div>

         )
    }

    return (
        <>
            {homeBody}
        </>
    )


}
// <div className={"w-2/3"}>
//     <header className="  h-fit  border-b-2 border-stone-300">
//         <div className="mt-24  flex flex-row justify-between gap-4">
//             <h2 className="text-5xl font-bold text-stone-700 mb-4">{project.title}</h2>
//             <button className={"text-stone-700 hover:text-stone-950"}>Delete</button>
//         </div>
//         <div className=" flex flex-row justify-between gap-4">
//             <p className="text-stone-400 font-bold pl-1 mb-4">{project.date}</p>
//         </div>
//         <div className=" flex flex-row justify-between gap-4">
//             <p className="text-stone-800 my-4">
//                 {project.description}
//             </p>
//         </div>
//     </header>
//     <div className=" h-fit  ">
//         <div className=" mt-8 flex flex-row justify-between gap-4">
//             <h2 className="text-5xl font-bold text-stone-700 mb-4">Tasks</h2>
//         </div>
//         <div className=" mt-8 flex flex-row justify-start gap-4">
//             <input className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
//             <button
//                 className=" bg-stone-600 rounded-md p-3 text-stone-200 font-bold hover:text-stone-800 hover:bg-stone-200">Add
//                 Task
//             </button>
//         </div>
//
//     </div>
// </div>