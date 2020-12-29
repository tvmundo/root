<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<br/>
<a href="#" style="color: #000 ; font-size: 22px;" onClick="window.location.reload()"><b> Reload ↻ <b/></a>
</div></div>
<? session_start();
$user=$_SESSION['adim'];
include("bduser.txt")
?>
<META HTTP-EQUIV="REFRESH" CONTENT="100;URL=funcao_user.php">
<head>
<script type="text/javascript" language="javascript" src="jq.js"></script>
<script type="text/javascript" language="javascript">
$(function($) {
	// Quando o formulário for enviado, essa função é chamada
	$("#formulario").submit(function() {
		// Colocamos os valores de cada campo em uma váriavel para facilitar a manipulação
		var nome = $("#nome").val();
		var email = $("#email").val();
		var mensagem = $("#mensagem").val();
		// Exibe mensagem de carregamento
		$("#status").html("<img src='carregando.gif' alt='Enviando' />");
		// Fazemos a requisão ajax com o arquivo envia.php e enviamos os valores de cada campo através do método POST
		$.post('envia.php', {nome: nome, email: email, mensagem: mensagem }, function(resposta) {
				// Quando terminada a requisição
				// Exibe a div status
				$("#status").slideDown();
				// Se a resposta é um erro
				if (resposta != false) {
					// Exibe o erro na div
					$("#status").html(resposta);
				} 
				// Se resposta for false, ou seja, não ocorreu nenhum erro
				else {
					// Exibe mensagem de sucesso
					$("#status").html("Mensagem enviada com sucesso!");
					// Coloca a mensagem no div de mensagens
					$("#mensagens").prepend("<strong>"+ nome +"</strong> disse: <em>" + mensagem + "</em><br />");
					// Limpando todos os campos
					$("#email").val("");
					$("#mensagem").val("");
				}
		});
	});
});
</script>


</head>
<body>

<iframe src="area.php" width=400px height=250px frameborder=0 marginwidth=0 marginheight=0 scrolling="auto"></iframe> <br>
<?

if($user == "logado"){
	echo" <form id=\"formulario\" action=\"javascript:func()\" method=\"post\">
	<textarea name=\"mensagem\"  id=\"mensagem\"  style=\"width:400px; height:100px\"></textarea><br>
	<input type=\"text\" name=\"nome\" id=\"nome\" value=\"tv mundo\">
	<input type=\"submit\" name=\"enviar\" value=\"enviar\">
	</form>
	<form action=\"deletar_user.php\" method=\"post\">
	<input type=\"submit\" name= \"deletar\" value=\"deletar\" />
	</form>";
}else{
		echo" <form id=\"formulario\" action=\"javascript:func()\" method=\"post\">
	<textarea name=\"mensagem\"  id=\"mensagem\"  style=\"width:400px; height:100px\"></textarea><br>
	<input type=\"hidden\" name=\"nome\" id=\"nome\" value=\"$nickuser\">eu sou :<font color=purple> $nickuser</font>
	<input type=\"submit\" value=\"Enviar\" /> <a href=\"sair.php\">sair</a>
	</form> 
	";
	if($admsaidaqui=="sair"){
	echo"<META HTTP-EQUIV=\"REFRESH\" CONTENT=\"1;URL=sair.php\">";
}
}
?>
<be><div id="status" style="display: none;"></div>
<br />
<a href="../../../tela1.html"><span style="color: #000; font-size: 30px;">⌂ <span style="color: #000; font-size: 20px;"> Rede Music: Robson Simas</a>
<br /><br />
<iframe  width="100%" height="400" scrolling="no" src="../../../../../../../banners/aleatorios.meus.html" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <!-----------Fim div abre temp banner------------><br/>