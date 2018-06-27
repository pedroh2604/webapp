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
		var postDoPerfil = Posts.find({idDoAutor: idDoUsuario}).fetch().reverse();
		return postDoPerfil;
	},
	segue: function() {
// Reactive function which you can use to get a parameter from the URL
		var idDoUsuario = FlowRouter.getParam("id");
		var usuario = Meteor.users.findOne({_id: idDoUsuario});
		var seguidores = usuario.profile.seguidores;
// identifies the user's id position in the array "seguidores"
	    var posicao = seguidores.indexOf(Meteor.userId());
/* 
a shorter way of writing an if clause, the longest would be	    
	    if(posicao === -1) {
	      return false;
	    } else {
	      return true;
	    } 
*/
	    return posicao !== -1;
  },
  euMesmo: function() {
 // Reactive function which you can use to get a parameter from the URL
		var idDoUsuario = FlowRouter.getParam("id");
/* 
a shorter way of writing an if clause, the longest would be
	if(idDoUsuario === Meteor.userId()) {
			return true;
		} else {
			return false;
		}

*/
		return idDoUsuario === Meteor.userId();
  }
});

// follow and unfollow buttons
Template.Perfil.events({
    "click .seguir": function(evento, template) {
// Reactive function which you can use to get a parameter from the URL
       var idDoUsuario = FlowRouter.getParam("id");
// calls method "seguirUsuario"
       Meteor.call("seguirUsuario", idDoUsuario);
    },
    "click .deixar-de-seguir": function(evento, template) {
// Reactive function which you can use to get a parameter from the URL      
       var idDoUsuario = FlowRouter.getParam("id");
// calls method "deixarDeSeguirUsuario"
       Meteor.call("deixarDeSeguirUsuario", idDoUsuario);
    }
});

//capitalizes the 1st letter of words
function FirstUpper(str) {
 // will split the string delimited by space into an array of words
     str = str.toLowerCase().split(' ');               

// str.length holds the number of occurrences of the array...
     for(var i = 0; i < str.length; i++){   
// splits the array occurrence into an array of letters         
          str[i] = str[i].split('');     
// converts the first occurrence of the array to uppercase              
          str[i][0] = str[i][0].toUpperCase();    
// converts the array of letters back into a word.      
          str[i] = str[i].join('');                     
     }
//  converts the array of words back to a sentence.
     return str.join(' ');                              
}