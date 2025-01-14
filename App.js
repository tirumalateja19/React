import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div id="header">
    <div id="food-app-nav">
      <div id="logo">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/007/500/121/small_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"></img>
      </div>
      <div id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const RestCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.data;
  return (
    <div id="card-res">
      <img
        src="https://www.dafontfree.co/wp-content/uploads/2021/08/KFC-Logo-Font-1.jpg"
        id="image"
        alt="kfc-logo"
      ></img>
      <h1>{name}</h1>
      <br></br>
      <h4>{cuisines.join(", ")}</h4>
      <br></br>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const resList = [
  {
    data: {
      id: 3311,
      name: "KFC",
      cuisines: ["Burgers", "Legs", "Wings"],
      avgRating: 4.4,
    },
  },
  {
    data: {
      id: 3319,
      name: "FullMoon",
      cuisines: ["Noodles", "Manchuria", "Fried Rice"],
      avgRating: 4.0,
    },
  },
  {
    data: {
      id: 3321,
      name: "Pizza Palace",
      cuisines: ["Pizza", "Pasta", "Garlic Bread"],
      avgRating: 4.2,
    },
  },
  {
    data: {
      id: 3323,
      name: "Taco Fiesta",
      cuisines: ["Tacos", "Burritos", "Nachos"],
      avgRating: 4.5,
    },
  },
  {
    data: {
      id: 3325,
      name: "Burger Barn",
      cuisines: ["Burgers", "Fries", "Milkshakes"],
      avgRating: 4.1,
    },
  },
  {
    data: {
      id: 3327,
      name: "Sushi World",
      cuisines: ["Sushi", "Tempura", "Sashimi"],
      avgRating: 4.8,
    },
  },
  {
    data: {
      id: 3329,
      name: "Pasta Paradise",
      cuisines: ["Pasta", "Ravioli", "Lasagna"],
      avgRating: 4.3,
    },
  },
  {
    data: {
      id: 3331,
      name: "BBQ Delight",
      cuisines: ["BBQ", "Grilled Chicken", "Ribs"],
      avgRating: 4.6,
    },
  },
  {
    data: {
      id: 3333,
      name: "Veggie Haven",
      cuisines: ["Salads", "Smoothies", "Wraps"],
      avgRating: 4.2,
    },
  },
  {
    data: {
      id: 3335,
      name: "Seafood Shack",
      cuisines: ["Lobster", "Crab", "Shrimp"],
      avgRating: 4.7,
    },
  },
  {
    data: {
      id: 3337,
      name: "Sweet Treats",
      cuisines: ["Cakes", "Ice Cream", "Pastries"],
      avgRating: 4.4,
    },
  },
  {
    data: {
      id: 3339,
      name: "Indian Spice",
      cuisines: ["Curry", "Biryani", "Naan"],
      avgRating: 4.5,
    },
  },
];

const Body = () => (
  <div id="restuarent">
    <div id="search">
      <h2>search</h2>
    </div>
    <div id="res-cards">
      {resList.map((restaurant) => (
        <RestCards key={restaurant.data.id} resData={restaurant} />
      ))}
    </div>
  </div>
);

const Footer = () => (
  <div id="footer-container">
    <div id="footer">
      <h1>footer section</h1>
    </div>
  </div>
);
const Container = () => (
  <div id="container">
    <Header />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);
