/*--------------START OF GAME--------------------*/

var myarray = Array(3);

for (i=0; i<=2;i++){
	myarray[i] = Array(3)
};

var player1="", player2="";

$(document).ready( function()
{
	$('.btn-start').click(()=>
	{

		if($('#btn-nickname1').val() == "" || $('#btn-nickname2').val() == "")
		{
			alert('Está faltando digitar o nome de algum jogador!!')
		}

		else
		{
			$('#player1').html($('#btn-nickname1').val());

			player1 = $('#btn-nickname1').val();

			$('#player2').html($('#btn-nickname2').val());

			player2 = $('#btn-nickname2').val();

			$('#start').hide();

			$('#court').show();

			controle.creat();

			controle.startclick();
		}
	})

	$(window).keyup(()=>{
		if(event.which==13)
			{
				if($('#btn-nickname1').val() == "" || $('#btn-nickname2').val() == "")
				{
					alert('Está faltando digitar o nome de algum jogador!!')
				}

				else
				{
					$('#player1').html($('#btn-nickname1').val());

					player1 = $('#btn-nickname1').val();

					$('#player2').html($('#btn-nickname2').val());

					player2 = $('#btn-nickname2').val();

					$('#start').hide();

					$('#court').show();

					controle.creat();

					controle.startclick();
				}
			}
	})
})

var controle = {

	player: 1,

	nplayer: 1,

	addplay(event){
		if(this.player == 1 && myarray[event.path[1].id][event.path[0].id]==undefined)
		{
			myarray[event.path[1].id][event.path[0].id] = 1;

			event.path[0].style="background-image: url(imagens/marcacao_1.png);";

			this.player=-1;

			this.check();

			this.draw();

			this.nplayer++;

			$('table').css('cursor', 'url(imagens/marcacao_2.png),auto');
		}

		if(this.player == -1 && myarray[event.path[1].id][event.path[0].id]==undefined)
		{

			myarray[event.path[1].id][event.path[0].id] = -1;

			event.path[0].style="background-image: url(imagens/marcacao_2.png);";

			this.player = 1;

			this.check();

			this.draw();

			this.nplayer++;

			$('table').css('cursor', 'url(imagens/marcacao_1.png),auto');
		}
	},

	startclick(){
		$('.position_field').click(()=>this.addplay(event));

		$('table').css('cursor', 'url(imagens/marcacao_1.png),auto');
	},

	check(){

		if(myarray[0][0]+myarray[0][1]+myarray[0][2]==3||
		   myarray[1][0]+myarray[1][1]+myarray[1][2]==3||
		   myarray[2][0]+myarray[2][1]+myarray[2][2]==3||
		   myarray[0][0]+myarray[1][0]+myarray[2][0]==3||
		   myarray[0][1]+myarray[1][1]+myarray[2][1]==3||
		   myarray[0][2]+myarray[1][2]+myarray[2][2]==3||
		   myarray[0][0]+myarray[1][1]+myarray[2][2]==3||
		   myarray[0][2]+myarray[1][1]+myarray[2][0]==3)
		{

			$('#modalbtn').click();
			$('#textresult').html(`Parabéns ${player1} você venceu!!`);
			$('#playagain').click(this.again.bind(this));
			$('#closemodal').click(this.removeclick.bind(this));
		}

		if(myarray[0][0]+myarray[0][1]+myarray[0][2]==-3||
		   myarray[1][0]+myarray[1][1]+myarray[1][2]==-3||
		   myarray[2][0]+myarray[2][1]+myarray[2][2]==-3||
		   myarray[0][0]+myarray[1][0]+myarray[2][0]==-3||
		   myarray[0][1]+myarray[1][1]+myarray[2][1]==-3||
		   myarray[0][2]+myarray[1][2]+myarray[2][2]==-3||
		   myarray[0][0]+myarray[1][1]+myarray[2][2]==-3||
		   myarray[0][2]+myarray[1][1]+myarray[2][0]==-3)
		{
			$('#modalbtn').click();
			$('#textresult').html(`Parabéns ${player2} você venceu!!`);
			$('#playagain').click(this.again.bind(this));
			$('#closemodal').click(this.removeclick.bind(this));
		}

	},

	again(){

			myarray = Array(3);

			for (i=0; i<=2;i++)
			{
			myarray[i] = Array(3)
			};

			$('#close').click();

			$('#start').show();

			$('#court').hide();

			$('#goback').hide();

			this.player = 1;

			this.nplayer = 1;

			this.creat();
	},

	creat(){
		
			var field = `<tr id="0"><td class="tdr tdb position_field" id="0"></td><td class="tdb tdr position_field" id="1"></td><td class="tdb position_field" id="2"></td></tr><tr id="1"><td class="tdr position_field" id="0"></td><td class="tdr position_field" id="1"></td><td class="position_field" id="2"></td></tr><tr id="2"><td class="tdt tdr position_field" id="0"></td><td class="tdt tdr position_field" id="1"></td><td class="tdt position_field" id="2"></td></tr>`;

			$('table').html(field);
	},

	draw(){
		if(this.nplayer==9)
		{
			$('#modalbtn').click();
			$('#playagain').click(this.again.bind(this));
			$('.close').click(this.removeclick.bind(this));
			$('#textresult').html('Deu empate :(.');
		}
	},

	removeclick(){
		$('.position_field').off();
		$('#goback').show();
		$('#goback').click(this.again.bind(this));
	}
		

}/*END OF THE OBJ*/