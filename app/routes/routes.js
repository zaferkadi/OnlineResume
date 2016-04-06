exports.routes = [];
var user_id = 467694;
exports.routes.push({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		return reply.view('index', {
			title: 'Home',
			message: 'message',
			user: {
				role: 'admin'
			}
		});
		//return reply.view('index',{title:'Title is here'});
	}
});


exports.routes.push({
	method: 'GET',
	path: '/contactInfo',
	handler: function(request, reply) {
		var contactInfo = require('../models/contactInfo').contactInfo;

		return reply(contactInfo);
	}
});

exports.routes.push({
	method: 'GET',
	path: '/dashboard',
	handler: function(request, reply) {
		return reply.view('dashboard', {
			title: 'Dashboard',
			message: 'message',
			user: {
				role: 'admin'
			},
			cvs: require('../models/cv').cvs
		});
	}
});


exports.routes.push({
	method: 'GET',
	path: '/cv/{id}',
	handler: function(request, reply) {
		var cvs = require('../models/cv').cvs;

		var cv = {};
		for (var i = cvs.length - 1; i >= 0; i--) {
			if (cvs[i].id == request.params.id) {
				console.log('cvs[i].id ', cvs[i].id);
				console.log('request.params.id ', request.params.id);
				cv = cvs[i];
				//return;
			}
		}
		//console.log(reply);
		
		return reply.view('cv', {
			title: 'Dashboard',
			cv: cv
		});
		
	}
});

exports.routes.push({
	method: 'GET',
	path: '/cv/{id}/edit',
	handler: function(request, reply) {
		var cvs = require('../models/cv').cvs;

		var cv = {};
		for (var i = cvs.length - 1; i >= 0; i--) {
			if (cvs[i].id == request.params.id) {
				console.log('cvs[i].id ', cvs[i].id);
				console.log('request.params.id ', request.params.id);
				cv = cvs[i];
				//return;
			}
		}
		//console.log(reply);
		
		return reply.view('edit-cv', {
			title: 'Dashboard',
			cv: cv
		});
		
	}
});

exports.routes.push({
	method: 'GET',
	path: '/cv/{id}/pdf',
	handler: function(request, reply) {
		var cvs = require('../models/cv').cvs;

		var cv = {};
		for (var i = cvs.length - 1; i >= 0; i--) {
			if (cvs[i].id == request.params.id) {
				console.log('cvs[i].id ', cvs[i].id);
				console.log('request.params.id ', request.params.id);
				cv = cvs[i];
				//return;
			}
		}

		var conversion = require("phantom-html-to-pdf")();
		conversion({
			html: "<style>h1{color:red}</style><h1>Hello World</h1>"
		}, function(err, pdf) {
			console.log(pdf.logs);
			console.log(pdf.numberOfPages);
			return reply(pdf.stream);
		});
	}
});