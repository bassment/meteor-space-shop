Products = new Meteor.Collection('products');

Products.bySku = function (sku) {
  return Products.findOne({sku: sku});
};

Products.featured = function () {
  var featuredSkus = ["honeymoon-mars", "johnny-liftoff", "one-way-reentry"];
  return Products.find({sku: {$in: featuredSkus}}, {fields: {cost: false, inventory: false}});
};

Products.allow({
  insert: function(userid, product){
    return isAdmin();
  },
  update: function(userid, product){
    return isAdmin();
  },
  remove: function(userid, product){
    return isAdmin();
  }
});


// Products.findOne = function (args) {
//   return _.find(Products, function (product) {
//     return product.sku === args.sku;
//   });
// };
