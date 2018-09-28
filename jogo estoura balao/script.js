/* Estourando balões!!!
var myArray = Array();

myArray['frutas'] = Array();

myArray['frutas'][0] = 'banana';

myArray['frutas'][1] = 'maça';

myArray['frutas'][2] = 'abacaxi';

myArray['frutas'][3] = 'uva';



myArray['coisas'] = ['ferramenta','martelo','parafuso','broca'];

var myArray2 = Array();

myArray2 = [['banana','maça','abacaxi','uva'],
			['ferramenta','marteloa','parafuso','broca']];

*/

var myobj = {};

myobj={

	baltotal: 84,

	balexp: 0,

	setTime: "",

	start(){

		this.baltotal = 84;	

		this.balexp = 0;
		
		$('#timer')[0].textContent = this.setTime;

		$('#baltotal')[0].textContent = 84;

		$('#balexp')[0].textContent = 0;

		for(i=0;i<=83;i++)
		{
			$('.baloes > img')[i].remove();
			$('.baloes')[i].innerHTML = '<img src="imagens/balao_azul_pequeno.png" onclick="myobj.remove(event)">'
		}

		this.time();
	},

	time(){

		var time = setInterval(()=>
		{
			if(this.setTime>0)
			{
				myobj.setTime--;
				$('#timer')[0].textContent = myobj.setTime;
			}

			else
			{
				alert('o jogo acabou');
				clearInterval(time);

				for(i=0;i<=84;i++)
				{
					$(`.baloes>img`)[i].removeAttribute("onclick");
				}
			}
		},1000)
	},

	remove(event){
		event.path[0].remove();
		event.path[1].innerHTML = '<img src="imagens/balao_azul_pequeno_estourado.png">';
		event.path[1].removeAttribute("onclick");
		this.reduce();
		this.add();	
	},

	reduce(){
		if (baltotal!=0) 
			{
				this.baltotal--;
				$('#baltotal')[0].textContent = this.baltotal;
			} 
	},

	add(){
		this.balexp++;
			$('#balexp')[0].textContent = this.balexp;
	}


}