//find each author's username and put them in the post
Template.Post.helpers({
	usernameDoAutor: function() {
// stores each author's id
		var idDoAutor = this.idDoAutor;
/* finds id in the collection ( userdatabase) and 
   takes the "author"(name) associated with it
*/
		var autor = Meteor.users.findOne({_id: idDoAutor});
// returns the username only
		return FirstUpper(autor.username);
	}
});

//like button
Template.Post.events({
// when button (like-button class) is clicked
    "click .like-button": function(evento, template) {
      console.log(template.data._id);
// calls method which updates the array "curtidas"
      Meteor.call("curtirPost", template.data._id);
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