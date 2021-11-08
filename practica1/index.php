<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php $nombre="Rubén"; ?>
    <h1>Mi nombre es <?php echo $nombre ?> </h1> 
    <p>Edad <input type="text" name="edad" id="fecha"></p>
    <p>
        <button onclick="alert(document.getElementByid('edad').value">
            Calcular
        </button>
    </p>
</body>
</html>