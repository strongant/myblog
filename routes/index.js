
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: "白文辉的个人博客" })
};
