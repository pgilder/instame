if(Meteor.isServer) {

    Meteor.startup(() => {

        if (Meteor.users.find().count() === 0) {
            Accounts.createUser({
                email: "pgilder@designdelegate.co",
                password: "p3620g007"
            });
        }

    });

}
