import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Home from "./Components/Home/Home.jsx";
import {useState} from "react";
function App() {
    const [projects , setProjects] = useState([])
    const [projectId , setProjectId] = useState(0);
    function handleProjectCreation(project){
        // setProjects( (prevState) => {
        //     prevState ? [...prevState , project] : project
        // } )
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
        setProjects( (prevState) => {
            console.log(prevState , project)
        } )
    }

  return (
    <main className={"h-screen flex gap-8"}>
        <Sidebar projects={projects} handleProjectCreation={handleProjectCreation} onProjectSelected={handleProjectSelected} selectedProject={projectId}/>
        <Home project={ projects && projects[projectId] } onDelete={handleProjectDelete}/>
    </main>
  );
}

export default App;
