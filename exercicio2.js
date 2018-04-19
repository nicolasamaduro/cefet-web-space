// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
var indiceAtual=0;

botoesAnterior = document.getElementById('anterior');
botoesAnterior.addEventListener('click', function() {
	if (indiceAtual===0){
		indiceAtual = todasAsImagens.length-1;
	}else{
		indiceAtual--;
	}
    document.getElementById('slide').src=servidorDasImagens+todasAsImagens[indiceAtual];
});


botoesProximo = document.getElementById('proximo');
botoesProximo.addEventListener('click', function() {
	if (indiceAtual===todasAsImagens.length-1){
		indiceAtual = 0;
	}else{
		indiceAtual++;
	}
    document.getElementById('slide').src=servidorDasImagens+todasAsImagens[indiceAtual];
});