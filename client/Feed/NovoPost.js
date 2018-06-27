//creats a variable valid for the whole template
Template.NovoPost.onCreated(function() {
    this.urlDaImagem = new ReactiveVar();
});


Template.NovoPost.events({
	//accesses texts typed in the textarea and stores them in the database
    "submit form": function(evento, template) {
    	//prevents page from realoding
        evento.preventDefault();
        //accesses text typed
        var textoDoFormulario = evento.target.texto.value;
        var urlDaImagem = template.urlDaImagem.get();
        console.log(urlDaImagem);
        /*
        console.log(textoDoFormulario);
        console.log(Meteor.userId())
        */
        // it's used to access methods from many different places
        Meteor.call("inserirPost", textoDoFormulario, urlDaImagem);
        //cleans textarea
        evento.target.texto.value = "";
    },
// inserts images to the database and return an url to it
    "change .myFileInput": function(event, template) {
        FS.Utility.eachFile(event, function(file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handles error
                } else {
                    //saves images to a link
                    template.urlDaImagem.set("/cfs/files/images/" + fileObj._id);
                }
            });
        });
    }
});