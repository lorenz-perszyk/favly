// I M P O R T S
import NavBar from "./Navigation/NavBar";

// C O M P O N E N T
function App() {
  return (
    <div className="px-2">
      <NavBar />
      <div className="home">
        <h1 className="text-4xl">Welcome to Favly!</h1>
        <h2>Looks kind of empty here :( How about you find something you like right here</h2>
      </div>
    </div>
  );
}

export default App;
