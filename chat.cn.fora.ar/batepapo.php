<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css"> 
a:link 
{ 
text-decoration:none; 
} 
</style>
<!----------------------correçao de caracteres ini ------------------------>
<!-- HTML 4 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- HTML5 -->
<meta charset="utf-8"/>
<xml version="1.0" encoding="utf-8"?>

<!----------------------correçao de caracteres Fim ----------------------->
<?php
$nick = $_POST['nick'];
$cor = $_POST['cor'];
if($nick == ""){
echo "<script> location.href='index.htm'; </script>";
exit;
}
?>
<html>
<head>
  <title>Bate Papo</title>
</head>
<body bgcolor="#000" /* C92E01 */ ><font face="Verdana" size="2" color="#FFFFFF">

 <div><iframe name="chat" src="chat.php" width="100%" height="80%" frameborder="0">Atualize seu navegador.</iframe><br></div><div><iframe name="ultimo" src="ultima.php" frameborder="0" width=300 height=16 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no>Favor atualizar seu navegador.</iframe></div>
<!--FORM DE FALA-->
<hr color="white"><form action="gravar.php" method="post" target="chat">
 <font color="<?php echo $cor ?>"><b><?php echo $nick ?></b></font color="<?php echo $cor ?>">
<input name="nick" type="hidden" value="<?php echo $nick ?>">
<input name="cor" type="hidden" value="<?php echo $cor ?>">
<select name="acao">
<option value="fala" selected>fala</option>
<!---<option value="grita">grita</option>
<option value="beija">beija</option>
<option value="canta">canta</option>
<option value="pergunta">pergunta</option>
<option value="concorda">concorda</option>
<option value="discorda">discorda</option>
<option value="desculpa-se">desculpa-se</option>
<option value="surpreende-se">surpreende-se</option>
<option value="sorri">sorri</option>
<option value="diverte-se">diverte-se</option>
<option value="briga">briga</option>
<option value="dá o fora">dá o fora</option>--->
  </select> : <input type="text" name="texto"> <input type="submit" value="Falar">
</form>
<form action="sair.php" method="post">
<input name="nick" type="hidden" value="<?php echo $nick ?>">
<input name="cor" type="hidden" value="<?php echo $cor ?>">
<input type="submit" value="Sair">
</form>
</font>
<a href="../../../tela1.html"><span style="font-size:20px; color: #fff;">Home - Robson simas</a>
</body>
</html>