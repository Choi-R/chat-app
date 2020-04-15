let express = require("express");
let app = express();
var path = require("path");
let http = require("http").createServer(app);
let io = require("socket.io")(http);
const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  // res.sendFile(__dirname + "/index.html");
  // res.sendFile(process.cwd() + "/index.html");
  res.sendFile(path.resolve(process.cwd() + "/index.html"));
  // app.use(express.static(path.join(__dirname, "../index.html")));
  // res.render("index");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// Here are some ideas to improve the application:

// Broadcast a message to connected users when someone connects or disconnects.
// Add support for nicknames.
// Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
// Add “{user} is typing” functionality.
// Show who’s online.
// Add private messaging.
// Share your improvements!
