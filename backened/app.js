
const crypto = require("crypto");
const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");


const { getStoredItems, storeItems } = require('./data/items');

const app = express();
const secret = "•••••••••"; 

const USERS_FILE = "./data/user.json";

app.use(bodyParser.json());



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  
  const users = JSON.parse(fs.readFileSync(USERS_FILE));
console.log(users);
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, message: "Login successful 🎉" });
  } else {
    res.json({ success: false, message: "Invalid email or password ❌" });
  }
});

app.get("/chatbase-token/:userId", (req, res) => {
  const userId = req.params.userId; // e.g. user’s UUID or email
  const hash = crypto
    .createHmac("sha256", secret)
    .update(userId)
    .digest("hex");

  res.json({ userId, hash });
});




app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

app.listen(8080);