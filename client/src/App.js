import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import CreatePost from "./components/CreatePost/CreatePost";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <CreatePost />
      </div>
    </div>
  )
}

export default App;
