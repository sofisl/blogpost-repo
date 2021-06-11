exports.mygcf= (req, res) => {
    const rainbow = require('@example/blogpost-repo');
    res.send(`Hello ${rainbow(escapeHtml(req.query.name || req.body.name || 'World'))}!`); 
 };
 