var entries = require('../models/entries.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    submit: function(req, res) {
        res.render('new-entry');
    },
    view: function(req, res){
        res.render('view-submissions', 
            {entries: entries}  
        );
    },
    formdata: function(req, res){
        entries.push(req.body);
        res.redirect('/view-submissions');
    }
};

module.exports = indexController;