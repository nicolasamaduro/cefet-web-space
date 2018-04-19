// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
botoes = document.getElementsByClassName('botao-expandir-retrair');
for(let botao of botoes){
	botao.addEventListener('click', function() {
		if(botao.innerHTML==='+'){
			botao.innerHTML='-';
  			botao.parentNode.classList.add('expandido');
		}else{			
			botao.innerHTML='+';
  			botao.parentNode.classList.remove('expandido');
		}
	});
}