<%@page contentType="text/html" pageEncoding="UTF-8" isErrorPage="true"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ejemplo de Pagina de Error - Error</title>
</head>
<body style="background-color:red; color:white;">
    <h1>ERROR</h1>
    <p>Se ha producido el siguiente error:</p>
    <p>${pageContext.errorData.throwable}</p>
</body>
</html>