<?php
// Recuperamos os valores dos campos através do método POST

$mensagem = $_POST['mensagem'];
$nome = $_POST['nome'];
if($nome=="marcos brinner"){
$fp=fopen("banco.txt","a+");
$posta="
<font color=blue> $nome </font> diz:<font color=red> $mensagem</font><br>
";
fputs($fp,$posta);
fclose($fp);
}
else{
$fp=fopen("banco.txt","a+");
$posta="
<font color=\"purple\"> $nome </font> diz:<font color=orange> $mensagem </font><br>
";
fputs($fp,$posta);
fclose($fp);
}
	

?>