const express = require("express");
const cors = require("cors");
const app = express();

// Create an array of 20 student objects
const data = [
  { id: 1, name: "Alice", bio: "Loves math and science." },
  { id: 2, name: "Bob", bio: "Enjoys playing soccer." },
  { id: 3, name: "Charlie", bio: "Aspiring artist." },
  { id: 4, name: "Diana", bio: "Chess champion." },
  { id: 5, name: "Ethan", bio: "Plays the guitar." },
  { id: 6, name: "Fiona", bio: "Enjoys hiking." },
  { id: 7, name: "George", bio: "Tech enthusiast." },
  { id: 8, name: "Hannah", bio: "Loves reading books." },
  { id: 9, name: "Ian", bio: "Basketball player." },
  { id: 10, name: "Julia", bio: "Writes poetry." },
  { id: 11, name: "Kevin", bio: "Enjoys cooking." },
  { id: 12, name: "Laura", bio: "Plays piano." },
  { id: 13, name: "Mike", bio: "Soccer fan." },
  { id: 14, name: "Nina", bio: "Loves animals." },
  { id: 15, name: "Oscar", bio: "Aspiring scientist." },
  { id: 16, name: "Paula", bio: "Enjoys painting." },
  { id: 17, name: "Quinn", bio: "Plays video games." },
  { id: 18, name: "Rachel", bio: "Enjoys swimming." },
  { id: 19, name: "Sam", bio: "Loves astronomy." },
  { id: 20, name: "Tina", bio: "Enjoys traveling." },
];

app.use(cors());
app.use(express.json());

app.get("/students", (req, res) => {
  res.json(data);
  console.log("done");
});

app.listen(3000, function () {
  console.log("working");
});
