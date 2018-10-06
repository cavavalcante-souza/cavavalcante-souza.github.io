level = window.location.href;

var regexp = /\?./

var time;

game_level = regexp.exec(level)[0];

var game = {
	timer: 0,
	life:3,
	startclock(n){
	this.timer = n;
	
	this.creat();

	var clock = setInterval(()=>{
		$('#time').html(this.timer);
		if(this.timer == 0)
		{
			clearInterval(clock);
		}
		else{
			this.timer--
			}

		if(this.life == 1)
		{
			clearInterval(clock);
		}
		
		
	},1000)},

	creat(){

		var time2 = setInterval(()=>{
			if(this.life == 1)
			{
				clearInterval(time2);
				window.location.href = 'game_over.html'
			}

			if(this.timer == 0)
			{
				clearInterval(time2);
				window.location.href = 'winner.html'
				
			}
			else{

			var size = Math.trunc(Math.random()*100+50);

			var right = Math.trunc(Math.random()*80+10);

			var top = Math.trunc(Math.random()*80+10);

			$('.row-game').append(`<img id="mosca" src="imagens/mosca.png" onclick="game.remove(event)" width="${size}" height="${size}" style="right:-${right}%;top:${top}%;"></img>`);

			this.setTime()

			}
		},3000)
	},

	setTime(){ 

		time = setTimeout(()=>{
		$('#mosca').remove();
		this.life--;
		document.querySelectorAll('.life')[this.life].style.color = "grey";
		

		},3000);
	},

	remove(event){
		
		clearTimeout(time);
		event.target.remove()
	}
}

switch(game_level)
{
	case "?1": game.startclock(30);break;
	case "?2": game.startclock(60);break;
	case "?3": game.startclock(90);break;
}



