<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<div style="text-align: center;">
<!-----------------------ini div temporizada incistente temp----------------------> 
<iframe  width="100%" height="300" scrolling="no" src="../../../../../../../banners/aleatorios.meus.html" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            <!-----------Fim div abre temp banner------------><br/>
<a href="#" style="color: #000 ; font-size: 22px;" onClick="window.location.reload()"><b> Reload ↻ <b/></a>
</div></div>
<? include("bduser.txt"); ?>
<!---<img  src="logo.png" width=400px heigth=300px />--->
<META HTTP-EQUIV="REFRESH" CONTENT="50;URL=entrar.php">
<br />
<br />
Cel. (84) 9 8895-9797 <br/> WhatsApp (84) 9 8780-4100
<br />
<br />
<br />
<? if($temgente == "ocupado"){ // ocupado
	echo" Robson esta  coupado volte em alguns  minutos ";
}else{
	echo"
<center><form action=\"verificauser.php\" method=\"post\">
informe seu  nome <br><input type=\"text\" name=\"nome_user\" maxlength=\"20\">
<input type=\"submit\" value=\"entrar\">
</form><h6> maximo 20 letras</center>
";
}
?>