<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html >
  <head>
  <link rel="stylesheet" href="css/style.css">
    <title>Login</title>
   


  </head>

  <body>

    <div class="wrapper">
	  <div class="container">		
		   <span class="logo-lg"><img src="css/Maktabati_Logo.png" alt="Administration" style="width:180px;height:70px;"/></span>
		<h1>
			Administration Biblitothèque
		</h1>
		<form class="form" method="post" action="administrateur.jsp" >
			<input type="text" placeholder="Username" name="login"/>
			<input type="password" placeholder="Password" name="passwrd"/>
			<input type="hidden" name='co' value="clicked"/>
	
			<br>
			<button type="submit" name="submit" id="login-button">Login</button>
		</form>
	</div>
	
	<ul class="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</div>
    <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

        <script src="../index.js">
        </script>

    
    
    
  </body>
</html>

