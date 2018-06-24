//initializes typeahead package
Template.Pesquisa.rendered = function() {
  Meteor.typeahead.inject();
};

Template.Pesquisa.helpers({
  items: function() {
    // data source function
    // TODO fetch items from meteor collection
    return Meteor.users.find().fetch().map(function(user){ 
    	return {id: user._id, value: user.profile.name}; 
    });
  },
  selected: function(event, suggestion, datasetName) {
    // event - the jQuery event user
    // suggestion - the suggestion user
    // datasetName - the name of the dataset the suggestion belongs to
    // TODO your event handler here
	// suggestion.id   is each user's id number
    FlowRouter.go("/perfis/" + suggestion.id);
  }
});