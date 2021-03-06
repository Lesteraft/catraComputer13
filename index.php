<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CatraComputer</title>
    <!--link rel="shortcut icon" href="img/logo.jpg" id="linkIcon"-->
    <link rel="icon" href="img/logo.jpg" type="image/x-icon" style="border-radius: 50%;">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./css/bootstrap.min.css" />
    <link rel="stylesheet" href="./css/custome1.css" />
    <link rel="stylesheet" href="./css/custome2.css" />
    <link rel="stylesheet" href="./css/custome3.css" />
    <link rel="stylesheet" href="./font-awesome/css/all.min.css" />

</head>

<body>
    <!--Nav Nombre-->
    <nav class="navbar mb-3" style="background-color: #072359">
        <div class="text-center" style="color: #0388A6; font-weight: bold; font-size: 20px; margin: auto;">
            CatraComputer
        </div>
    </nav>

    <!-- Catracomputer-->
    <div class="container">
        <!--Controles Principales-->
        <div class="text-center nav">
            <div style="height: 35px;" id="btnPlay" data-toggle="tooltip" title="Iniciar">
                <i class=" controles fa fa-play" aria-hidden="true"></i>
            </div>
            <div style="border-right: 2px solid; height: 35px; padding-right: 15px;" id="btnStop" data-toggle="tooltip" title="Alto">
                <i class=" controles fa fa-stop" aria-hidden="true"></i>
            </div>
            <div style="height: 35px;" id="btnPaso" data-toggle="tooltip" title="Paso a Paso">
                <i class="controles fa fa-shoe-prints"></i>
            </div>
            <div style="height: 35px; display: none;" id="btnSiguiente" data-toggle="tooltip" title="Siguiente">
                <i class=" controles fa fa-step-forward" aria-hidden="true"></i>
            </div>

        </div>
        <div class=" mt-2 row">
            <div class="col-2" style="background-color: white; border: 1px solid;  padding: 0px !important ">
                <div class="alutra">
                    <nav class="navbar" style="background-color:#0388A6;">
                        <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                            Acumulador
                        </div>
                    </nav>
                    <div class="text-center extra-info" id="infoAC">

                    </div>
                </div>
                <div class="alutra">
                    <nav class="navbar" style="background-color:#0388A6;">
                        <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                            PC
                        </div>
                    </nav>
                    <div class="text-center extra-info" id="infoPC">

                    </div>
                </div>
            </div>
            <div class="col-6" style="background-color: white; border: 1px solid;  padding: 0px !important ">
                <nav class="navbar" style="background-color:#0388A6;">
                    <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                        instrucciones
                    </div>
                </nav>
                <div class="row" id="InstruccionesTotal">
                    <div class="sidebar col-1" style="padding-right: 0px;">
                        <div id="lineas" class="sidebar text-center">
                            <div>
                                000
                            </div>
                        </div>
                    </div>
                    <textarea id="instrucciones" class="editor" rows="12"></textarea>
                </div>
            </div>
            <div class="col-4" style="background-color: white; border: 1px solid; padding: 0px !important ">
                <nav class="navbar" style="background-color:#0388A6;">
                    <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                        Mensajes
                    </div>
                </nav>
                <div id="notificaciones"></div>
            </div>
            <div class="col-12 row accordion ml-0" id="accordionExample" style="background-color: white;padding: 0px !important; margin-bottom: 50px; ">

                <div style="border: 1px solid; padding: 0px;" class="col-10" id="" style="">
                    <div class="col-12 collapse" aria-labelledby="headingOne" data-parent="#accordionExample" id="collapseRegistro">
                        <nav class="navbar" style="background-color:#0388A6;">
                            <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                                Registros
                            </div>
                        </nav>
                        <div class="parte-baja container" id="divRegistros">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Direccion</th>
                                        <th scope="col">Instruccion</th>
                                        <th scope="col">Informacion</th>
                                    </tr>
                                </thead>
                                <tbody id="registrosCuerpo">
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="col-12 collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample" id="collapseConsola">
                        <nav class="navbar" style="background-color:#0388A6;">
                            <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                                Consola
                            </div>
                        </nav>
                        <div class="parte-baja mt-2">
                            <div class="row m-auto" id="divConsola">
                                <div class="text-center navbar" id="consolaSalida" style="display: flex;">
                                    <div class="col-1"> > </div>
                                    <div class="col-5" id="consolaSalidaDiv"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 collapse" aria-labelledby="headingFour" data-parent="#accordionExample" id="collapsePaso">
                        <nav class="navbar" style="background-color:#0388A6;">
                            <div class="text-center" style="color: #072359; font-weight: bold; margin: auto;">
                                Paso A Paso
                            </div>
                        </nav>
                        <div class="parte-baja">
                            <textarea class=" container" id="divPaso" disabled>
                        		
                        	</textarea>

                        </div>
                    </div>
                </div>
                <div class="text-center accordion mt-2 col-2">
                    <div class="">

                        <button class="btn btn-secondary mr-1 btn-block w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapseRegistro" aria-expanded="false" aria-controls="collapseRegistro" id="headingOne">Registros</button>

                        <button class="btn btn-secondary mr-1 btn-block w-100" type="button" data-toggle="collapse" data-target="#collapseConsola" aria-expanded="true" aria-controls="collapseConsola" id="headingTwo">Consola</button>

                        <button class="btn btn-secondary mr-1 btn-block w-100 collapsed" type="button" data-toggle="collapse" data-target="#collapsePaso" aria-expanded="false" aria-controls="collapsePaso" id="headingFour">Paso a Paso</button>

                    </div>
                </div>
            </div>
        </div>

    </div>
    <script src="./jquery/jquery.min.js"></script>
    <script src="./popper/popper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/controlador.js"></script>
</body>

</html>