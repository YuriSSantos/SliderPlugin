(function ( jQuery )
{

	/** [INI] VARIAVEIS GLOBAIS **/
	var slider = jQuery ( '.slider' );
	var imagens = slider . find('img');
	var imagemAtual = imagens[0];
	/** [FIM] VARIAVEIS GLOBAIS **/


	/***********************************************************************************/


	/** [INI] SLIDER PLUGIN **/
	jQuery . sliderPlugin = function( dados )
	{

		dados = setDados( dados );

		slider . css
		({
			'width'    : dados.width,
			'height'   : dados.height,
			'overflow' : 'hidden'
		});

		iniImg();
		troca();

	};
	/** [FIM] SLIDER PLUGIN **/


	/***********************************************************************************/


	/* [INI] ACAO DE TROCA **/
	function troca() {
		jQuery ( imagens ) . hide();	
		jQuery ( imagemAtual ) . fadeIn(300);
	}

	jQuery . sliderPlugin . fazTroca = function(event)
	{
		var achou = false;
		var i = 0;
		while( i < imagens.length && !achou ) 
		{
			if(imagens[i] === imagemAtual) {
				if( jQuery ( event.currentTarget ) . hasClass( 'prox' ) ) {
					if( i + 1 === imagens.length ) {
						imagemAtual = imagens[0];
					} else {
						imagemAtual = imagens[i + 1];
					}
				} else {
					if( i - 1 < 0 ) {
						imagemAtual = imagens[imagens.length - 1];
					} else {
						imagemAtual = imagens[i - 1];
					}
				}
				achou = true;
			} else { i++; }
		}
		troca();
	};
	/* [FIM] ACAO DE TROCA **/


	/***********************************************************************************/


	/* [INI] DADOS PADROES **/
	var dadosPadrao = {
		'width' : '100%',
		'height': 500
	};

	function setDados( dados )
	{
		return jQuery . extend( dadosPadrao, dados );
	}
	/* [FIM] DADOS PADROES **/


	/***********************************************************************************/


	/* [INI] INICIALIZA IMAGENS **/
	function iniImg()
	{
		for(var i = 0; i < imagens.length; i++)
		{
			jQuery ( imagens[i] ) . css
			({
				'position'   : 'relative',
				'width'      : '100%',
				'height'     : 'auto',
				'top'        : '50%',
				'margin-top' : '-25%'
			});
		}
	}
	/* [FIM] INICIALIZA IMAGENS **/

}) ( jQuery );