var friendList = require('../data/friends.js');

module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friendList);
    });

    app.post('/api/friends', function(req,res){
 
		var newFriend = req.body;
	

		var userResponses = newFriend.scores;
	
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000; 

		for (var i = 0; i < friendList.length; i++) {

			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendList[i].scores[j] - userResponses[j]);
			}

			if (diff < totalDifference) {


				totalDifference = diff;
				matchName = friendList[i].name;
				matchImage = friendList[i].profile;
			}
        }
        friendList.push(newFriend);

       res.json({status: 'OK', matchName: matchName, matchImage: matchImage});res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
    });
};