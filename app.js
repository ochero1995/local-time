var clock = document.querySelector("#clock");

var date = new Date();

var currentTime = [date.getHours(), date.getMinutes(), date.getSeconds()];

var am_pm = "pm";

function am_or_pm(){
	if(currentTime > 12){
		am_pm = "pm";
	}else{
		am_pm = "pm";
	}
}

function zeroMinutes(){
	if (currentTime[1]<10) {
		currentTime[1] = "0" + currentTime[1];
	}
}


function displayLocal(){

	clock.innerHTML = "<p>Local Time</p>" + "<span>" + currentTime[0] + ":" + currentTime[1] + " " + am_pm + "</span>";
}

am_or_pm();
zeroMinutes();
displayLocal();