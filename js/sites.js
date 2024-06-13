const sites = [
	'https://www.ne0ge0.com/',
	'https://ne0ge0.neocities.org/',
	'https://ne0ge0.infinityfreeapp.com/',
	'http://ne0ge0.000webhostapp.com/',
	'http://ne0ge0.github.io/',
]

function GetNext(url) {
	let index = sites.indexOf(url);

	return index >= sites.length - 1 ? sites[0] : sites[index + 1];
}