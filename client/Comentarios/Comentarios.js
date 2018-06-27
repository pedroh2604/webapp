// displays the username of each person who commented
Template.Comentario.helpers({
	usernameDoAutor: function() {
// stores usernames' id
		var idDoAutor = this.autor;
//accesses users' properties
		var autor = Meteor.users.findOne({_id: idDoAutor});
// returns only usernames
		return FirstUpper(autor.username);
	},
     idDoAutor: function() {
          var idDoAutor = this.autor;
          return idDoAutor;
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