Comentarios = new Mongo.Collection("comentarios");
// inserts comments
Meteor.methods ({
// idDoPost is required as there'll be many posts
	"inserirComentario": function(textoDoComentario, idDoPost) {
		if (Meteor.userId() !== null) {
			Comentarios.insert({
				texto: textoDoComentario,
				post: idDoPost,
				autor: Meteor.userId()
		});
		}
	}
});