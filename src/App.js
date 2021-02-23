import './App.css';

function App() {
  return (
    <div className="">
      <Menu menu1="Home" menu2="Shop" menu3="About"></Menu>
      <Slider img1="https://lh3.googleusercontent.com/proxy/2AALcZfrTnS_qd78FCRDGB4Be8m_Sh_s4xQIByXJwyFjl8JTuH6nP7-z7uw03sXOF3YePOTrkDf0HU2hAcYVF07rvDB_rJ3YufSSHb3jdl8" img2="https://thumbs.dreamstime.com/b/backpack-different-colorful-stationery-table-banner-design-180023783.jpg" img3="https://i.pinimg.com/originals/44/a8/96/44a896b49c923eacb70404f85cada62a.jpg" img4="https://www.pngkey.com/png/detail/249-2499302_online-shopping-clothing-shoes-mens-fashion-womens-women.png"></Slider>
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
function Slider(props) {
  const images = [props.img1, props.img2, props.img3, props.img4];
  let i = 0;
  const URls = `url('${images[i]}')`;
  const style = { backgroundImage: URls }
  return (
    <section className="slider">
      <div className="slider_controls">
      </div>
      <div className="slider_content" style={style}>

      </div>
    </section>
  );
}

export default App;
