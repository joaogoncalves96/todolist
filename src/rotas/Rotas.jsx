import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route path="/list" element={<ToDoList />} />
            </Routes>
            <Routes>
                <Route path="/" element={<ToDoForm />} />
            </Routes>
        </Router>
    )
}

export default Rotas