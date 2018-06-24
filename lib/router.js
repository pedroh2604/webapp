FlowRouter.route("/", {
    action: function(params, queryParams) {
       BlazeLayout.render("LayoutPrincipal", {main: "Inicio"});
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