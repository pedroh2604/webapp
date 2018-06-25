Meteor.methods({
//updates array "seguindo" (adds each user)
    "seguirUsuario": function(idDoUsuario) {
        if(Meteor.userId() !== idDoUsuario) {
            Meteor.users.update(Meteor.userId(), {
                $addToSet: {
                    "profile.seguindo": idDoUsuario
                }
            });
//updates array "seguidores" (adds each user)
            Meteor.users.update(idDoUsuario, {
                $addToSet: {
                    "profile.seguidores": Meteor.userId()
                }
            });
        }
    },
    "deixarDeSeguirUsuario": function(idDoUsuario) {
        if(Meteor.userId() !== idDoUsuario) {
//updates array "seguindo" (removes each user)
            Meteor.users.update(Meteor.userId(), {
                $pull: {
                    "profile.seguindo": idDoUsuario
                }
            });
//updates array "seguidores" (removes each user)
            Meteor.users.update(idDoUsuario, {
                $pull: {
                    "profile.seguidores": Meteor.userId()
                }
            });
        }
    }
});