var friends = require("../app/data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.send(friends);
    });

    app.post("/api/friends", function(req, res){
        var user = req.body;
        console.log(user);
        var closestUser = {};
        var closestDiff = 100;
        var difference = 0;
        friends.forEach(function(friend) {
            difference = 0;
            friend.scores.forEach(function(score, i) {
                
                difference = difference + Math.abs(user.scores[i] - score);
                console.log(`
                user - ${user.scores[i]}
                friend - ${score}
                diff - ${difference}
                `)
            });
            console.log(`${friend.name} has a difference of ${difference}`);  
            if (difference<closestDiff){
                console.log(`${friend.name} is now the closest`);
                closestDiff = difference;
                closestUser = friend;
            }
        });
        res.json(closestUser);
    });
}

