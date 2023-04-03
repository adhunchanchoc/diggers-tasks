import { TabSelector, TabButton, List, Item, DeleteButton } from "./styled.js";
import "./App.css";
import { useState } from "react";
import importedDiggers from "./dataDiggers.json";
import importedTasks from "./dataTasks.json";

function App() {
  const [activeTab, setActiveTab] = useState("diggers-tab");
  const switchTab = (event) => setActiveTab(event.target.name);
  // console.table(JSON.stringify(importedDiggers));
  const [diggers, setDiggers] = useState(importedDiggers);
  const [tasks, setTasks] = useState(importedTasks);

  const handleDel = (event, id) => {
    let filteredDiggers = diggers.filter((digger) => digger.id != id);
    setDiggers(filteredDiggers);
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
                    // data-old-id={digger.id}
                    onClick={(event) => handleDel(event, digger.id)}
                  >
                    X
                  </DeleteButton>
                </Item>
              ))}
            </ul>
          </List>
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
          </List>
        </>
      )}
    </div>
  );
}

export default App;
