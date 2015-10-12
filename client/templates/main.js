Template.registerHelper("money", function(amount){
  return accounting.formatMoney(amount);
});

Template.registerHelper("markdown", function(text){
  var converter = new showdown.Converter();
  return converter.makeHtml(text);
});
