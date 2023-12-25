import Button from "./components/Button";
import Menu from "./components/Menu/index";

function App() {
  return (
    <div className="App" data-testid="root-element">
      <Menu
        defaultIndex="0"
        onSelect={() => console.log("sdsdsds")}
        mode="vertical"
      >
        <Menu.Item>cool link</Menu.Item>
        <Menu.Item>cool link 2</Menu.Item>
        <Menu.Item disabled>disabled</Menu.Item>
        <Menu.SubMenu title="下拉选项">
          <Menu.Item>下拉选项一</Menu.Item>
          <Menu.Item>下拉选项二</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  );
}

export default App;
