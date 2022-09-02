import "./App.css";
import Button from "./Button";
import ButtonDetail from "./ButtonDetail";

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
      <div className="images__button__container">
        <ButtonDetail name="RESET FILTER" />
        <ButtonDetail name="CHOOSE IMAGE" />
        <ButtonDetail name="SAVE IMAGE" />
      </div>
    </div>
  );
}

export default App;
