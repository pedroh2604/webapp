FlowRouter.route("/", {
    action: function(params, queryParams) {
// if user is logged in when oppening the website
      if(Meteor.userId() === null) {
// displays template Inicio
       BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
      } else {
// else displays template Feed
        FlowRouter.go("/feed");
      }
    }
});

FlowRouter.route("/sobre", {
    action: function(params, queryParams) {
       BlazeLayout.render("LayoutPrincipal", {main: "Sobre"});
    }
});

FlowRouter.route("/contato", {
    action: function(params, queryParams) {
       BlazeLayout.render("LayoutPrincipal", {main: "Contato"});
    }
});

FlowRouter.route("/feed", {
  // only displays the page if the user is signed in
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
       BlazeLayout.render("LayoutPrincipal", {main: "Feed"});
    }
});

FlowRouter.route("/perfis/:id", {
  // only displays the page if the user is signed in
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action: function(params, queryParams) {
       BlazeLayout.render("LayoutPrincipal", {main: "Perfil"});
    }
});