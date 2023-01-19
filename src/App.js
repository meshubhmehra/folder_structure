import './App.css';
import { Button } from './components/button';
import { IoIosAdd } from 'react-icons/io'
import { FiEdit2 } from 'react-icons/fi'


function App() {
  const addData = () => {
    console.log('add is clicked');
  }
  const updateData = () => {
    console.log('update is clicked');
  }
  return (
    <div className="App">
      <Button title={'Add'} icon={<IoIosAdd />} handleClick={addData} />
      <Button title={'update'} icon={< FiEdit2 />} handleClick={updateData} />

    </div>
  );
}

export default App;
