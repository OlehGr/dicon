import { BrowserRouter } from "react-router-dom";
import Header from './page/Header/Header';
import Nav from './page/Navigate/Nav';
import Welcome from './page/Window/winds/Welcome';
import Window from './page/Window/Window';


function App(props) {
  return (
    <div className='page'>
      <BrowserRouter>
        <Header class='header' />
        <Nav class='nav' />
        <Window class='wind' store={props.store} />
      </BrowserRouter>
    </div>
  );
}

export default App;
