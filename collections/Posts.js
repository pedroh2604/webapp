Posts =  new Mongo.Collection("posts");

/*
stores text typed, images, user's id and usernames 
from people who liked posts
*/
Meteor.methods({
	"inserirPost": function(textoDoFormulario, urlDaImagem) {
// some text are considered false in js as null, empty, undefined
		if(Meteor.userId() !== null && textoDoFormulario) {
			Posts.insert({
	            texto: textoDoFormulario,
	            idDoAutor: Meteor.userId(),
	            curtidas: [], 
	            imagem: urlDaImagem
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
	},
//removes posts
    "removerPost": function(idDoPost) {
/* 
denies removing if the author from the post is not the 
user logged in(from console)
*/
        var post = Posts.findOne({_id: idDoPost});
        var idDoAutor = post.idDoAutor;

        if(idDoAutor === Meteor.userId()) {
// finds each post in the collection, getting info from it
            Posts.remove(idDoPost);
        }
    }
});