Router.configure({
  layoutTemplate:"layout",
  notFoundTemplate:"notFound",
  loadingTemplate:"loading"
});

Router.route("/", {
  name: 'homeIndex',
  data: function () {
    return {
      message: 'Welcome to Meteor Shop!'
    };
  }
});

Router.route("/about", {
  name: 'homeAbout'
});

Router.route("/contact", {
  name: 'homeContact'
});

Router.route("/product/:sku", {
  name: 'productsShow',
  data: function () {
    return Products.findOne({sku: this.params.sku});
  }
});

Router.route("/vendors/:slug", {
  name: 'vendorsShow',
  data: function () {
    return Vendors.findOne({slug: this.params.slug});
  }
});
