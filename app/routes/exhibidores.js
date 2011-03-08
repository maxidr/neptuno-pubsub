var app = module.parent.exports;

app.get('/exhibidores/:id', function(req, res){
  console.log("Exhibidor # " + req.params.id);
  res.render('exhibidores/index');
});

