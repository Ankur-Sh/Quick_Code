import "./App.css";
import ClickMovement from "./components/ClickMovement";
import SameDataButtons from "./components/SameDataButtons";
import SeparateButtons from "./components/SeparateButton";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
function App() {
    return (
        <div className="App">
            <ShoppingList />
            <SeparateButtons />
            <SameDataButtons />
            <ClickMovement />
            <TodoList />
        </div>
    );
}

export default App;
