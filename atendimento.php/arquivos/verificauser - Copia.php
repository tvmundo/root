<?
$nome = $_POST['nome_user'];
/* $temgente="temgente"; */
$nickuser="nickuser";
$fp=fopen("bduser.txt","w+");
$novo="
<?
/* $$temgente = \"ocupado\"; */
$$nickuser = \"$nome\";
?>
";
fputs($fp,$novo);
fclose($fp);

$fp2=fopen("banco.txt","w+");
$novo2="<font color=grey> bem vindo <Br></font>";
fputs($fp2,$novo2);
fclose($fp2);
echo "<META HTTP-EQUIV=\"REFRESH\" CONTENT=\"1;URL=funcao_user.php\">";
?>