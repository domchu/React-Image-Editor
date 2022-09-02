import "./App.css";
import Button from "./Button";

function App() {
  return (
    <div className="page_container">
      <h1>Image Editor</h1>
      <div className="container">
        <div className="button__container">
          <Button />
        </div>
        <div className="image__container">
          <h1>image</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
