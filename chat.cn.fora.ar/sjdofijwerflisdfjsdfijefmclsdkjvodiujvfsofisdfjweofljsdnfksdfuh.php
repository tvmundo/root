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
<title>Área de administração</title>
<script language="javascript">
function reinicia(){
alert("O bate-papo foi reinicializado com sucesso. \nSugestão: iniciar falando o porquê de sua ação.");
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