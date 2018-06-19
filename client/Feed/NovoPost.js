Template.NovoPost.events({
	//accesses texts typed in the textarea and stores them in the database
    "submit form": function(evento, template) {
    	//prevents page from realoding
        evento.preventDefault();
        //accesses text typed
        var textoDoFormulario = evento.target.texto.value;
        /*
        console.log(textoDoFormulario);
        console.log(Meteor.userId())
        */
        // it's used to access methods from many different places
        Meteor.call("inserirPost", textoDoFormulario);
        //cleans textarea
        evento.target.texto.value = "";
    }
});