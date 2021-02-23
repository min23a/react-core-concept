import './App.css';

function App() {
  return (
    <div className="">
      <Menu menu1="Home" menu2="Shop" menu3="About"></Menu>
      <Banner img="https://lh3.googleusercontent.com/proxy/2AALcZfrTnS_qd78FCRDGB4Be8m_Sh_s4xQIByXJwyFjl8JTuH6nP7-z7uw03sXOF3YePOTrkDf0HU2hAcYVF07rvDB_rJ3YufSSHb3jdl8" ></Banner>
    </div>
  );
}
function Menu(props) {
  return (
    <div className="menu">
      <a className="brand_link" href="#"><img className="brand_logo" src="media/logo.png" alt="" /></a>
      <ul className="menu_list">
        <li ><a className="menu_item" href="#">{props.menu1}</a></li>
        <li><a className="menu_item" href="#">{props.menu2}</a></li>
        <li><a className="menu_item" href="#">{props.menu3}</a></li>
      </ul>
    </div>
  );
}
function Banner(props) {
    const images = props.img;
    const URls = `url('${images}')`;
    const style = { backgroundImage: URls }
  return (
    <section className="banner">
      <div className="banner_content" style={style}>
        <div className="banner_overlay">
          <p className="banner_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quibusdam animi provident, nostrum inventore vero corrupti. Est rem officia voluptas. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorem. Ea, alias placeat sint minus aut natus, modi corrupti quos soluta tenetur perferendis vero maxime officia beatae odit, et cum?</p>
        <button className="banner_btn">SHOP NOW</button>
        </div>
        
      </div>
    </section>
  );
}

export default App;
