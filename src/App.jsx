import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Home from "./Components/Home/Home.jsx";
import {useState} from "react";
function App() {
    const [projects , setProjects] = useState([])
    const [projectId , setProjectId] = useState(0);
    function handleProjectCreation(project){
        setProjects( (prevState) => [...prevState , project] )
    }
    function handleProjectSelected(id){
        setProjectId(id)
    }


  return (
    <main className={"h-screen flex gap-8"}>
        <Sidebar projects={projects} handleProjectCreation={handleProjectCreation} onProjectSelected={handleProjectSelected} selectedProject={projectId}/>
        <Home project={projects[projectId]}/>
    </main>
  );
}

export default App;
