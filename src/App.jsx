import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Home from "./Components/Home/Home.jsx";
import {useState} from "react";
import {list} from "postcss";
function App() {
    const [projects , setProjects] = useState()
    const [projectId , setProjectId] = useState(0);

   function handleTaskCreation ( Task , projectId) {
       setProjects( prevState => prevState.map((item , itemIndex)=>{
           if(itemIndex === projectId){
                return {
                    ...item,
                    tasks: [...item.tasks , Task ]
                }
           }
       })
       )
   }



    function handleTaskDeletion(Task , projectId){
        setProjects( (prevState) => prevState.map( (item , itemIndex) => {
            if(itemIndex === projectId){
                return {
                    ...item ,
                    tasks: item.tasks.filter( (item) => item !== Task )
                }
            }
        } ) )
    }
    function handleProjectCreation(project){
        if(projects){
            setProjects( (prevState) => ([...prevState , project]) )
        }
        else{
            setProjects( [project] )

        }
    }
    function handleProjectSelected(id){
        setProjectId(id)
    }
    function handleProjectDelete(project){
        setProjects( (prevState) => prevState.filter((item) => item !== project)  )
    }

  return (
    <main className={"h-screen flex gap-8"}>
        <Sidebar projects={projects} handleProjectCreation={handleProjectCreation} onProjectSelected={handleProjectSelected} selectedProject={projectId}/>
        <Home project={ projects && projects[projectId] } projectId={projectId} handleTaskCreation={handleTaskCreation} handleTaskDeletion={handleTaskDeletion} onDelete={handleProjectDelete}/>
    </main>
  );
}

export default App;
