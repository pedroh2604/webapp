Posts =  new Mongo.Collection("posts");

//stores text typed. user's id and usernames from people who liked posts
Meteor.methods({
	"inserirPost": function(textoDoFormulario) {
		if(Meteor.userId() !== null) {
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
	}
});