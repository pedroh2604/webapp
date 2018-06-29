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
// as autopublish tool was removed, meteor needs to know what to publsh
Meteor.publish("posts", function() {
// finds info from the user who is logged in
	var usuario = Meteor.users.findOne({_id: Meteor.userId()});
// finds out who the user is following
	var seguindo = usuario.profile.seguindo;
// used to display users' own posts
	var autores = seguindo;
	autores.push(Meteor.userId());

// finds every single post from the database, but only the ones from followed users
	return Posts.find({idDoAutor: {$in: autores}});
});

Meteor.publish("usuarios", function() {
// finds every single user from the database
	return Meteor.users.find({}, {fields: {
		"username": 1,
		"_id": 1,
		"profile": 1
	}});
});

Meteor.publish("comentarios", function(idDoPost) {
// finds every comment from each post
	return Comentarios.find({post:idDoPost});
});
