import { useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="">
      <Menu menu1="Home" menu2="Shop" menu3="About"></Menu>
      <Banner img="media/mens-fashion-womens-women.png" ></Banner>
      <FeaturedProduct Link='https://fakestoreapi.com/products?limit=6'></FeaturedProduct>
    </div>
  );
}
function Menu(props) {
  return (
    <nav className="menu">
      <a className="brand_link" href="#"><img className="brand_logo" src="media/logo.png" alt="" /></a>
      <ul className="menu_list">
        <li ><a className="menu_item" href="#">{props.menu1}</a></li>
        <li><a className="menu_item" href="#">{props.menu2}</a></li>
        <li><a className="menu_item" href="#">{props.menu3}</a></li>
      </ul>
    </nav>
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
function FeaturedProduct(props) {
  const address = props.Link;
  fetch(address)
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        console.log(element)
        const divs = document.createElement("div");
        divs.className = "products";
        divs.style.backgroundImage = `url('${element.image}')`
        document.querySelector('.featured_product').appendChild(divs);
      });
    })
  return (
    <section>
      <h2 className="title">Featured Product</h2>
      <div className="featured_product">

      </div>
    </section>

  );
}

export default App;
