import './App.css';
import Buttons, { NavBar } from './component/button';
import Trial from './component/trial';
import Jay from './component/jay';

const name = ["Gandu", "Gendubhai", "Ganjedi"];

function App() {
  return (
    <>
      <NavBar />
      <Trial {...name} />
      <Buttons />
      <Jay/>
    </>
  )
}

export default App;