<img  src="logo.png" />
<br />
<br />
<br />
<center>você foi  desconectado obrgado por nos contactar </center>
<?
$fp=fopen("banco.txt","w+");
$novo="usuario  se  auto  desconectou";
fputs($fp,$novo);
fclose($fp);

$fp2=fopen("bduser.txt","w+");
$novo2=" ";
fputs($fp2,$novo2);
fclose($fp2);
?>