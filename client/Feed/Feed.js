Template.Feed.events({
	//accesses texts typed in the textarea and stores them in the database
    "submit form": function(evento, template) {
    	//prevents page from realoding
        evento.preventDefault();
        //accesses text typed
        var textoDoFormulario = evento.target.texto.value;
        console.log(textoDoFormulario);
        //stores text typed
        Posts.insert({
            texto: textoDoFormulario
        });
        //cleans textarea
        evento.target.texto.value = "";
    }
});
	
	//accesses post stored in the database and insert them in the template
Template.Feed.helpers({
	posts: function() {
	// .fetch() return info in the correct format
		var postsDaCollection = Posts.find().fetch();
		// return the text so it can be added to html
		return postsDaCollection;
	}
});