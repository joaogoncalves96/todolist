import "./App.css";
import ListProvider from "./components/ListProvider";
import Rotas from "./rotas/Rotas";

function App() {
  return (
    <>
      <ListProvider >
        <Rotas /> 
      </ListProvider>
    </>
  );
}

export default App;
