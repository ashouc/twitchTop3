$(document).ready(getInfo);

var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function getInfo() {
	users.map(function(userName) {
		var url = 'https://wind-bow.gomix.me/twitch-api';
		var urlUsers = `${url}/users/${userName}`;
		var urlStreams = `${url}/streams/${userName}`;
		var urlChannels = `${url}/channels/${userName}`;
		
		// To create the DIVs with respective IDs
		$('#get').append(`<div id="${userName}"></div>`);
		$.getJSON(urlChannels, displayChannels)
		
		// Callback function to display the channels of each users
		function displayChannels(data) {
			$(`#${userName}`).append("<div class='layout col-lg-3 col-md-3 col-sm-12'><div class='user-name'>" + `${data.display_name}` + "</div></div>");
			$(`#${userName} div div`).append(`<a target="_blank" href="${data.url}"><img src="${data.logo}"></img></a>`);
			$.getJSON(urlStreams, displayStatus);
		}
		
		// Callback function to see if channel is online or offline
		function displayStatus(data) {
			`${data.stream}` == "null" ? $(`#${userName} div`).addClass("offline") : $(`#${userName} div`).addClass("online");

		}
		$(`#online`).on('click', function() { 
			$(`#${userName} .online`).removeClass('hidden');
			$(`#${userName} .offline`).addClass('hidden');
		})
		$(`#offline`).on('click', function() {
			$(`#${userName} .offline`).removeClass('hidden');
			$(`#${userName} .online`).addClass('hidden');
		})
		$(`#all`).on('click', function() {
			$(`#${userName} .offline`).removeClass('hidden');
			$(`#${userName} .online`).removeClass('hidden');
		})
	});
}














