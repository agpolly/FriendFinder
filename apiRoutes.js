var path = require("path");

  module.exports = function (muppets) {
    muppets.get("/api/friends", function(req, res) {
      res.json(muppets);
});

//Route to take in survey and handle compatibility logic
app.post("/api/friends", function(req, res) {
    var friends = JSON.parse(fs.readFileSync("friends.json", "utf8"))
    var newFriend = req.body;
    newfriend.name = req.body.name.replace(/\s+/g, "").toLowerCase();
    newfriend.photo = req.body.photo;
    newfriend.scores = req.body.scores;
    if (tables.length<6) {
      newTable.hasTable = true;
    } else {
      newtable.hasTable = false;
    }
    friends.push(newFriend);
    fs.writeFileSync("friends.json", JSON.stringify(tables), "utf8");
    res.json(newFriend);
  });

