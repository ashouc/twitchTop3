$(document).ready(getInfo);

function getInfo() {
	var url = "https://api.twitch.tv/kraken/videos/top";
	axios.get(url, {
		params: {
			client_id: "4e7krw7bghjfi4kzykhygbpsklzvuv",
			period: "week",
			limit: "3"
		}
	})
	.then(function(response) {
		// $('#get').append(`<div id="${userName}"></div>`);
		for (var i = 0; i < response.data.videos.length; i++) {
			$('#get').append(
				`<div class='layout col-lg-4 col-md-12 col-sm-12'>
					<div class="user-name">
						${response.data.videos[i].channel.display_name}
							<div class="game-name">Game: ${response.data.videos[i].game}</div>
								<div class="title">${response.data.videos[i].title}</div>
								<img class="preview" src="${response.data.videos[i].preview}">
							<div class="descrip i"><span>What's going on here?</span><br>${response.data.videos[i].description_html}
							<br><a target="_blank" href="${response.data.videos[i].url}">Check it out!</a></div>
					</div>
				</div>`);
			// if (`${response.data.videos[i].game}` == "") {
			// 	$('div.game-name').append(`Game: Whoops! Looks like a secret game...`);
			// }
			// if (`${response.data.videos[i].preview}` == "") {
			// 	$('div.preview').append(`Whoops! Hmmm... that image is not available at the moment.`);
			// }
			// if (`${response.data.videos[i].description_html}` == "") {
			// 	// (`${response.data.videos[i].description_html}`).add(`Whoops! Looks like you'll have to click here and find out more`);
			// 	$('div.descrip.i').append(`Whoops! Looks like you'll have to click here and find out more`);
			// }
		}
	});

	// users.map(function(userName) {
	// 	var url = 'https://api.twitch.tv/kraken/videos/top';
	// 	// var urlUsers = `${url}/users/${userName}`;
	// 	// var urlStreams = `${url}/streams/${userName}`;
	// 	// var urlChannels = `${url}/channels/${userName}`;

	// 	$('#get').append(`<div id="${userName}"></div>`);
	// 	axios.get(url, {
	// 		params: {
	// 			client_id: "4e7krw7bghjfi4kzykhygbpsklzvuv",
	// 			name: userName
	// 		}
			
	// 	}) 
	// 	.then(function(response) {
	// 		console.log(response);
	// 	});
		
		// To create the DIVs with respective IDs
		// $('#get').append(`<div id="${userName}"></div>`);
		// axios.get(urlChannels, displayChannels)
		
	// 	// Callback function to display the channels of each users
	// 	function displayChannels(data) {
	// 		$(`#${userName}`).append("<div class='layout col-lg-3 col-md-3 col-sm-12'><div class='user-name'>" + `${data.display_name}` + "</div></div>");
	// 		$(`#${userName} div div`).append(`<a target="_blank" href="${data.url}"><img src="${data.logo}"></img></a>`);
	// 		$.getJSON(urlStreams, displayStatus);
	// 	}
		
	// 	// Callback function to see if channel is online or offline
	// 	function displayStatus(data) {
	// 		`${data.stream}` == "null" ? $(`#${userName} div`).addClass("offline") : $(`#${userName} div`).addClass("online");

	// 	}
	// 	$(`#online`).on('click', function() { 
	// 		$(`#${userName} .online`).removeClass('hidden');
	// 		$(`#${userName} .offline`).addClass('hidden');
	// 	})
	// 	$(`#offline`).on('click', function() {
	// 		$(`#${userName} .offline`).removeClass('hidden');
	// 		$(`#${userName} .online`).addClass('hidden');
	// 	})
	// 	$(`#all`).on('click', function() {
	// 		$(`#${userName} .offline`).removeClass('hidden');
	// 		$(`#${userName} .online`).removeClass('hidden');
	// 	})
}














