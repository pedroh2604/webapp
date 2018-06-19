Posts =  new Mongo.Collection("posts");

//stores text typed and user's id
Meteor.methods({
	"inserirPost": function(textoDoFormulario) {
		Posts.insert({
            texto: textoDoFormulario,
            idDoAutor: Meteor.userId()
        });
	}
});