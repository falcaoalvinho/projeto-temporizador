// Constantes de indentificação dos campos do tipo "input".
    const InputMinutos  = document.getElementById("input-minutos");
    const InputSegundos = document.getElementById("input-segundos");

// Constantes de indenficação dos campos do tipo "button".
    const ButtonIniciar = document.getElementById("button-iniciar");
    const ButtonParar   = document.getElementById("button-parar");

// Variavel de estados para o Temporizador (true = ligado, false = desligado)
    var EstadoTemporizador;

// Variaveis contadoras (Minutos e Segundos respectivamente).
    var ContadorMinutos;
    var ContadorSegundos;

// Variavel que armazena o intervalo.
    var Intervalo;

// Função para inicio do temporizador.
    function Iniciar() {

        EstadoTemporizador = true;

        ContadorMinutos  = InputMinutos.value;
        ContadorSegundos = InputSegundos.value;

            if(ContadorMinutos === 60) {
                ContadorMinutos --;
            }

            if(ContadorSegundos === 60) {
                ContadorSegundos --;
            }

            Intervalo = setInterval(() => {
        
                InputMinutos.value  = parseInt(ContadorMinutos);
                InputSegundos.value = parseInt(ContadorSegundos);

                if (ContadorMinutos == 0 && ContadorSegundos == 0){
                    Parar(Intervalo);
                }

                ContadorSegundos --;

                if (ContadorSegundos < 0) {
                    ContadorSegundos = 59;
                    ContadorMinutos --;
                }
            }, 1000)   
        }
        
// Função para parada do temporizador. 
    function Parar() {
        if(EstadoTemporizador != false) {
            clearInterval(Intervalo);
        }
    }
    
// Mendigada humilde.
    console.log("Dá 10 pra mim Julio na humilda <3");