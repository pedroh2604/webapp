// calls Meteor.publish from server/main.js
Template.Feed.onCreated(function() {
	Meteor.subscribe("posts");
});

Meteor.subscribe("usuarios");
//accesses post stored in the database and insert them in the template
Template.Feed.helpers({
	posts: function() {
	/*
	 .fetch() return info in the correct format
	 .reverse() reverses the order, so the latest posts go to the top
	*/
		var postsDaCollection = Posts.find().fetch().reverse();
		// return the text so it can be added to html
		return postsDaCollection;
	}
});