import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <Menu menu1="Home" menu2="Shop" menu3="About"></Menu>
    </div>
  );
}
function Menu(props){
  return(
    <div className="menu">
      <a className="brand_link" href="#"><img className="brand_logo" src="media/logo.png" alt=""/></a>
      <ul className="menu_list">
        <li className="menu_item">{props.menu1}</li>
        <li className="menu_item">{props.menu2}</li>
        <li className="menu_item">{props.menu3}</li>
      </ul>
    </div>
  );
}

export default App;
