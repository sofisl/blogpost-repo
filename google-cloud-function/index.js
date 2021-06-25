const unicode = require('@example/blog-repo');
const escapeHtml = require('escape-html');

exports.mygcf= (req, res) => {
    res.send(`Hello ${escapeHtml(unicode(req.query.name || req.body.name || 'World'))}!`); 
 };
 