/* gets the routs according to usersnames
https://atmospherejs.com/kadira/flow-router
*/
Template.Perfil.helpers({
	perfil: function() {
// Reactive function which you can use to get a parameter from the URL
		var idDoUsuario = FlowRouter.getParam("id");
//user's info
		var info = Meteor.users.findOne({_id: idDoUsuario});
		return info;
	},
//finds authors' posts to put them in their profile
	posts: function() {
		var idDoUsuario = FlowRouter.getParam("id");
		var postDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch();
		return postDoPerfil;
	}
});