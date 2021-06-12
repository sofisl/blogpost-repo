exports.mygcf= (req, res) => {
    const unicode = require('@example/blog-repo');
    const escapeHtml = require('escape-html');
    res.send(`Hello ${escapeHtml(unicode(req.query.name || req.body.name || 'World'))}!`); 
 };
 