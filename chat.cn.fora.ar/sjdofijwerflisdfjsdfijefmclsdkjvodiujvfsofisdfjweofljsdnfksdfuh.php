<?php
 $file = "chat.txt";
 $bd = fopen($file, "w");
 fwrite($bd, "");
 fclose($bd);
 $ufile = "ultima.txt";
 $ubd = fopen($ufile, "w");
 $unew = "-";
 fwrite($ubd, $unew);
 fclose($ubd);
?>
<html>
<head>
<title>�rea de administra��o</title>
<script language="javascript">
function reinicia(){
alert("O bate-papo foi reinicializado com sucesso. \nSugest�o: iniciar falando o porqu� de sua a��o.");
window.close();
}
</script>
</head>
<body onLoad="javascript:reinicia()">
<center><hr size="1">
<font face="Verdana" size="1">Feche esta janela. </font><hr size="1">
</center>
</body>
</html>