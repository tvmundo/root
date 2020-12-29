<html>
<head>
<title>
sistema  de  atendimento  eitabirano
</title>
</head>
<center>
<img src="logo.png" >
</center>
<br>
<br>
<center> voce  excluiu/desconectou  esse  usuario  com sucesso!</center>
<?
$fp = fopen("banco.txt","w+");
$novo =" voc&ecirc; foi  desconectado  da  converça";
fputs($fp,$novo);
fclose($fp);

$fp2=fopen("bduser.txt","w+");
$novo2=" ";
fputs($fp2,$novo2);
fclose($fp2);

 echo "<br><br><a href=\"index.php\">voltar para  sua area</a>";
