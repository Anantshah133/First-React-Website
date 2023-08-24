import './App.css';
import Buttons, { NavBar } from './component/button';
import Trial from './component/trial';

const menus = ["Home", "Features", "Pricing"];

function App() {
  return (
    <>
      <NavBar {...menus} />
      <Trial />
      <Buttons />
    </>
  )
}

export default App;