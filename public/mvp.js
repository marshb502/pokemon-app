$(document).ready(function() {
	alert('connected');
	getData();
})

function getData() {
    $.ajax({
        url : '/random',
        type: 'GET',
        success : handleData
    })


function handleData(data) {
    alert(data);
    //do some stuff
}