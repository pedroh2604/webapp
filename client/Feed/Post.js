Template.Post.helpers({
//find each author's username and put them in the post
	usernameDoAutor: function() {
// stores each author's id
		var idDoAutor = this.idDoAutor;
/* finds id in the collection ( userdatabase) and 
   takes the "author"(name) associated with it
*/
		var autor = Meteor.users.findOne({_id: idDoAutor});
// returns the username only
		return FirstUpper(autor.username);
	},
// shows the number of likes
  numeroDeCurtidas: function() {
// return the length of the array "curtidas"
    return this.curtidas.length;
  },
//  identifies if the user's already liked the post
  usuarioCurtiu: function() {
    var curtidas = this.curtidas;
// identifies the user's id position in the array "curtidas"
    var posicao = curtidas.indexOf(Meteor.userId());
    
    if(posicao === -1) {
      return false;
    } else {
      return true;
    }
  },
// gets comments from the database and displays them
  comentarios: function () {
      return Comentarios.find({post: this._id}).fetch();
  }
});

//like/dislike button
Template.Post.events({
// when button (botao-curtir class) is clicked
    "click .botao-curtir": function(evento, template) {
// calls method which updates the array "curtidas"    /collection/Posts.js
      Meteor.call("curtirPost", template.data._id);
    },
// when button (botao-descurtir class) is clicked
    "click .botao-descurtir": function (evento, template) {
      Meteor.call("descurtirPost", template.data._id);
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