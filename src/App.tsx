import { useState } from 'react';
import * as c from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem'; 
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    { id:1, name:'Comprar pão', done:false },
    { id:2, name:'Comprar leite', done:true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id:list.length+1,
      name:taskName,
      done:false,
    });
    setList(newList);
  }

  return (
    <c.Container>
      <c.Area>
        <c.Header>
          Lista de Tarefas
        </c.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((i,k) => (
          <ListItem key={k} item={i} />
        ))}

      </c.Area>
    </c.Container>
  );
}

export default App;