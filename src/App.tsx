import Button from "./components/Button";

function App() {
  return (
    <div className="App" data-testid="root-element">
      <Button btnType="primary" size="lg">
        testewqeqewq
      </Button>
      <Button btnType="danger" size="lg">
        testeqwewqwq
      </Button>
      <Button btnType="default" size="lg">
        testeqweqeqw
      </Button>
      <Button btnType="link" size="lg">
        testeqwewqewq
      </Button>
    </div>
  );
}

export default App;
