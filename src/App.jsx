import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Home from "./Components/Home/Home.jsx";
function App() {
  return (
    <main className={"h-screen flex gap-8"}>
        <Sidebar />
        <Home />
    </main>
  );
}

export default App;
