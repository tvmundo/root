<? include("bduser.txt"); ?>
<img  src="logo.png" width=400px heigth=300px />
<META HTTP-EQUIV="REFRESH" CONTENT="30;URL=entrar.php">
<br />
<br />
esses e nosso sistema  autônomo  de  atendimento  desenvolvido  por  Marcos Brinner
<br />
<br />
<br />
<? if($temgente == "ocupado"){
	echo" descupe mas nossos atendentes estão  coupados volte em alguns  minutos ";
}else{
	echo"
<center><form action=\"verificauser.php\" method=\"post\">
informe seu  nome <br><input type=\"text\" name=\"nome_user\" maxlength=\"20\">
<input type=\"submit\" value=\"entrar\">
</form><h6> maximo 20 letras</center>
";
}
?>