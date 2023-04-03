import {
  TabSelector,
  TabButton,
  List,
  Item,
  DeleteButton,
  InputRow,
  InputField,
} from "./styled.js";
import "./App.css";
import { useState, useEffect } from "react";
import importedDiggers from "./dataDiggers.json";
import importedTasks from "./dataTasks.json";

function App() {
  const [activeTab, setActiveTab] = useState("diggers-tab");
  const switchTab = (event) => setActiveTab(event.target.name);
  // console.table(JSON.stringify(importedDiggers));
  const [diggers, setDiggers] = useState(importedDiggers);
  const [tasks, setTasks] = useState(importedTasks);
  const [totalWorkforce, setTotalWorkforce] = useState(0);
  const [requiredWorkforce, setRequiredWorkforce] = useState(0);

  const handleDel = (event, id) => {
    let filteredDiggers = diggers.filter((digger) => digger.id != id);
    setDiggers(filteredDiggers);
  };
  const calcTotalWorkforce = () => {
    let sum = 0;
    diggers.forEach((d) => {
      sum += d.male ? 1 : 0.5;
    });
    setTotalWorkforce(sum);
    return sum;
  };
  useEffect(() => {
    calcTotalWorkforce();
    setRequiredWorkforce(
      parseFloat(newTask.metru) / parseFloat(newTask.maxhod)
    );
    console.log("total workforce:", totalWorkforce);
  }); // DODAT napr. [newTask]

  const [newTask, setNewTask] = useState({ kod: "", metru: "0", maxhod: "1" });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // setRequiredWorkforce(
    //   parseFloat(newTask.metru) / parseFloat(newTask.maxhod)
    // );
    console.log(requiredWorkforce);
    setNewTask((newTask) => {
      return {
        ...newTask,
        [e.target.name]:
          e.target.type == "number"
            ? parseFloat(e.target.value)
            : e.target.value,
      };
    });
    return e;
  };
  const handleAddTask = () =>
    setTasks((tasks) => {
      return [...tasks, newTask];
    });

  const [newDigger, setNewDigger] = useState({
    id: diggers.length + 1,
    name: "",
    male: true,
  });

  const handleNewDigger = (e) => {
    setNewDigger({
      ...newDigger,
      [e.target.name]:
        e.target.name === "male"
          ? e.target.value === "true"
            ? true
            : false
          : e.target.value,
    });
  };
  const handleAddDigger = () => {
    setDiggers([...diggers, newDigger]);
    setNewDigger({ id: newDigger.id + 1 });
  };

  return (
    <div className="App">
      <TabSelector>
        <TabButton name="diggers-tab" onClick={switchTab} act={activeTab}>
          Zamestnanci
        </TabButton>
        <TabButton name="tasks-tab" onClick={switchTab} act={activeTab}>
          Ukol
        </TabButton>
      </TabSelector>
      {activeTab === "diggers-tab" && (
        <>
          <h2>Zamestnanci</h2>
          <List>
            <ul>
              {diggers.map((digger) => (
                <Item key={digger.id}>
                  {digger.id}. {digger.name} - {digger.male ? "muz" : "zena"}
                  <DeleteButton
                    id={digger.id}
                    onClick={(event) => handleDel(event, digger.id)}
                  >
                    X
                  </DeleteButton>
                </Item>
              ))}
            </ul>
          </List>
          <InputRow>
            <InputField
              type="text"
              onChange={handleNewDigger}
              name="name"
              placeholder="cele jmeno"
              value={newDigger.name}
            />
            <label htmlFor="m">
              <InputField
                type="radio"
                onChange={handleNewDigger}
                value="true"
                name="male"
                id="m"
              />
              muz
            </label>
            <label htmlFor="f">
              <InputField
                type="radio"
                onChange={handleNewDigger}
                value="false"
                name="male"
                id="f"
              />
              zena
            </label>
            <InputField
              onClick={handleAddDigger}
              type="button"
              value="Pridat"
            />
          </InputRow>
        </>
      )}
      {activeTab === "tasks-tab" && (
        <>
          <h2>Ukol</h2>
          <List>
            <ul>
              {tasks.map((task) => (
                <Item key={task.kod}>
                  {task.kod}: {task.metru} m v limitu {task.maxhod} hod.
                </Item>
              ))}
            </ul>
            <InputRow>
              <InputField
                onChange={handleChange}
                type="text"
                name="kod"
                placeholder="kod ukolu"
                value={newTask.kod}
              />
              <InputField
                onChange={handleChange}
                type="number"
                step="0.5"
                name="metru"
                value={newTask.metru}
              />
              <label htmlFor="metru">metru</label>
              <InputField
                onChange={handleChange}
                type="number"
                name="maxhod"
                value={newTask.maxhod}
              />
              <label htmlFor="limit">max h.</label>
              <InputField
                // disabled={true}
                onClick={handleAddTask}
                type="button"
                value="Pridat"
                style={
                  totalWorkforce < requiredWorkforce
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "green" }
                }
              />
            </InputRow>
          </List>
        </>
      )}
    </div>
  );
}

export default App;
