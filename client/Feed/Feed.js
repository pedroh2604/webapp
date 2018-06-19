	//accesses post stored in the database and insert them in the template
Template.Feed.helpers({
	posts: function() {
	// .fetch() return info in the correct format
		var postsDaCollection = Posts.find().fetch();
		// return the text so it can be added to html
		return postsDaCollection;
	}
});