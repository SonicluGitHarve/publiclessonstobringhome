import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const connection = await mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "pass",
    database: "testeHallan"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World'});
});

app.get('/api/getUser', async(req, res) => {
  const [rows] = await connection.query("SELECT * FROM usersApi");
  res.json(rows)
})

app.post('/api/postUser', async(req, res) => {
  const { username, email, fav_Colour } = req.body;

  const insert = "INSERT INTO usersApi (username, email, fav_Colour) VALUES (?, ?, ?)";
  
  try {
    await connection.query(insert, [username, email, fav_Colour]);
    res.json({ message: "User added to DB" });
  } catch (error) {
    res.status(500).json({ error: "Error when trying to add User", message: error });
  }
});

app.put('/api/editUser/:id_user', async(req, res) => {
  const { id_user } = req.params;
  const { username, email, fav_Colour } = req.body;

  const update = "UPDATE usersApi SET username = ?, email = ?, fav_Colour = ? WHERE id_user = ?";

  try {
    await connection.query(update, [username, email, fav_Colour, id_user]);
    res.json({ message: "Update successful", id: id_user });
  } catch (error) {
    res.status(500).json({ error: "Error with Update", message: error });
  }
});

app.delete('/api/deleteUser/:id_user', async(req, res) => {
  const { id_user } = req.params;

  const del_User = "DELETE FROM usersApi WHERE id_user = ?";

  try {
    await connection.query(del_User, [ id_user ]);
    res.json({ message: "User deleted", deleted_id: id_user });
  } catch (error) {
    res.status(500).json({ error: "Error with Delete", message: error });
  }
});

app.listen(3000, () =>{
  console.log('Connected at 3000');
});