Posts =  new Mongo.Collection("posts");

//stores text typed. user's id and usernames from people who liked posts
Meteor.methods({
	"inserirPost": function(textoDoFormulario) {
// some text are considered false in js as null, empty, undefined
		if(Meteor.userId() !== null && textoDoFormulario) {
			Posts.insert({
	            texto: textoDoFormulario,
	            idDoAutor: Meteor.userId(),
	            curtidas: []
        	});
		}
	},
// updates array "curtidas" (users who liked the posts)
	"curtirPost": function(idDoPost) {
		Posts.update(idDoPost, {
			$addToSet: {
				curtidas: Meteor.userId()
			}
		});
	},
	"descurtirPost": function(idDoPost) {
		Posts.update(idDoPost, {
// $pull is the opposite of $addToSet
			$pull: {
				curtidas: Meteor.userId()
			}
		});
	}
});