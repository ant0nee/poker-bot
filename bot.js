//dependancies 
const DISCORD = require("discord.js");
const CLIENT = new DISCORD.Client();
const FS = require("fs");
//code
CLIENT.on('ready', () => {

	console.log('Logged in as ${CLIENT.user.username}');

});	

CLIENT.on('message', msg => {

	

});

//get bot token
FS.readFile('setup.json', function(strError, strData) {

	if (strError) {

		throw strError; 

	}

	CLIENT.login(JSON.parse(strData).token);

});