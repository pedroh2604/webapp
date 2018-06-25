import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

// creates the arrays containing the followers and people who they're following
AccountsTemplates.configure({
    postSignUpHook: function(userId, info) {
    	Meteor.users.update(userId, {
// $set means to attribute a value
    		$set: {
    			"profile.seguidores": [],
    			"profile.seguindo": []
    		}
    	});
    }
});