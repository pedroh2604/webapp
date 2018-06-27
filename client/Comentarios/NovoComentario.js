// sends comment to database
Template.NovoComentario.events ({
	"submit form": function (evento, template) {
//prevents page from reloading
		evento.preventDefault();
//accesses what was typed
		 var texto = evento.target.texto.value;
//gets post id
		 var idDoPost = template.data._id;
//calls Meteor method that insert the comment in the database
		Meteor.call("inserirComentario", texto, idDoPost );
		evento.target.texto.value = "";
	}
});