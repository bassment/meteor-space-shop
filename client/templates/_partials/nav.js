Template.nav.helpers({
  isAdmin: function(){
    return isAdmin();
  },
  vendors: function () {
    return Vendors.find();
  }
});
