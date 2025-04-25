const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const sampleProducts = {
  laptop: [
    {
      name: "HP Pavilion x360 2-in-1 Laptop",
      price: 499,
      image: "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06551564.png"
    },
    {
      name: "Dell Inspiron 15 3000",
      price: 599,
      image: "https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/inspiron-15-3511-laptop.png"
    }
  ],
  phone: [
    {
      name: "iPhone 14",
      price: 799,
      image: "https://m.media-amazon.com/images/I/61cwywLZR-L._AC_SL1500_.jpg"
    },
    {
      name: "Samsung Galaxy S22",
      price: 749,
      image: "https://m.media-amazon.com/images/I/71HUnJvHsbL._AC_SL1500_.jpg"
    }
  ]
};

app.post("/search", (req, res) => {
  const { query } = req.body;
  const keyword = query.toLowerCase();
  const results = sampleProducts[keyword] || [];
  res.json(results);
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});