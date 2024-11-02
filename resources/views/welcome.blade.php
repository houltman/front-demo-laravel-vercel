<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autenticación JWT y registro con Vuejs</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <style>
    .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f8f9fa;
    padding: 1rem 0;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
}

.footer .container {
    max-width: 960px;
    margin: 0 auto;
}

.footer .content {
    text-align: center;
}

.footer p {
    margin: 0;
    color: #333;
}
    </style>
</head>
<body>
    <div id="app">

    </div>
    <script src="{{ mix('js/app.js') }}"></script>
    <!-- agregar footer -->
    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <strong>Autenticación JWT y registro con Vuejs + sdk Hedera</strong> by Houltman
                </p>
            </div>
        </div>
    </footer>
                    
</body>
</html>
