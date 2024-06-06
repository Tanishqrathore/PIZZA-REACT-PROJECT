import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

const Header = () => {
  return (
    <header className="header">
      <h1>Mama Mia</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <>
      <p>yo</p>
      <main className="menu">
        <h2>Our Menu</h2>
        <p>Made with love</p>
        <ul className="pizzas">
          {pizzaData.map((x) => (
            <Pizza obj={x} />
          ))}
        </ul>
      </main>
    </>
  );
};

function Pizza({ obj }) {
  // if (props.obj.soldOut) {
  //   return null;
  // }
  return (
    <li>
      <div className={`pizza ${obj.soldOut ? 'sold-out' : ''}`}>
        <img src={obj.photoName} />
        <div>
          <h3>{obj.name}</h3>
          <p>{obj.ingredients}</p>
        </div>
        <span>{obj.soldOut ? 'SOLD OUT' : obj.price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  const hours = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = () => {
    if (hours >= open && hours <= close) {
      return true;
    }
    return false;
  };

  return (
    <footer className="footer">
      <div>
        {isOpen() ? (
          <div className="order">
            <p>We are open until {close}:00</p>
            <button className="btn">ORDER</button>
          </div>
        ) : (
          <p>
            We are closed,please visit us between {open}:00 hours to {close}:00
            hours
          </p>
        )}
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
