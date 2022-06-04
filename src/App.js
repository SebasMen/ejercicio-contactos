import './App.css';
import TaskList from './componets/container/TaskList';
import Contacts from './componets/container/Contacts';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import ComponenteContext from './hooks/UseContext';
import PropsChildren from './hooks/PropsChildren';
import GreetingStyled from './componets/pure/GreetingStyled';

function App() {
  return (
    <div className="App">
      {/* <TaskList />
      <hr />
      <Contacts />
      <hr />
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <ComponenteContext />
      <hr />
      <PropsChildren nombre="Sebastian">
        <h3>
          Contenido del props.chlidren
        </h3>
      </PropsChildren> */}
      <GreetingStyled name="Sebastian" />
    </div>
  );
}

export default App;
