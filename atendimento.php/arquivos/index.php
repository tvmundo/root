<? session_start();
$verififca=$_SESSION['adim'];
$entrar=$_POST['entrar'];
$user=$_POST['user'];
$pass=$_POST['pass'];
if($verififca == "logado"){
	echo "<META HTTP-EQUIV=\"REFRESH\" CONTENT=\"1;URL=funcao_user.php\"> ";
}else{
	echo "voce não esta logado com adim do site<br>";
	echo " favor logar-se<br>";
	echo "<form action=\"index.php\" method=\"post\">
		  <input type=\"text\" name=\"user\"><br>
		  <input type=\"password\" name=\"pass\"><br>
		  <input type=\"submit\" value=\"logar\" name=\"entrar\">";
}
if($entrar == "logar"){
		if($user=="marcos" && $pass =="delreycoca"){ /* nome e senha do adm */
        if($user=="adm" && $pass =="141414");				 
				 $_SESSION['adim']="logado";
				  echo"<script>location.href='index.php'</script>";
				  echo"<script>alert(\" logado com sucessp\")</script>";
		}else{
				  echo "<script>alert(\"erro ao logar-se  verifique senha e usuário\")</script>";
	
		  }
}
?>