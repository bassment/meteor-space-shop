isAdmin = function () {
  var loggedUser = Meteor.user();
  var result = false;
  if (loggedUser) {
    if (Roles.userIsInRole(loggedUser, ['Administrator'])) {
      return true;
    }
  }
  return result;
};
