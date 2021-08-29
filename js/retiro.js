var app = new Vue({
    el: '#app1',
    data: {
        saldo: 500000,
        opcValor: 0,
        valor: 0,
        arrayValores: []

    },
    methods: {
        getValor() {
            if (this.opcValor == "1") {
                this.valor = 10000;
            } else if (this.opcValor == "2") {
                this.valor = 20000;
            } else if (this.opcValor == "3") {
                this.valor = 50000;
            } else if (this.opcValor == "4") {
                this.valor = 100000;
            } else {
                // this.valor == "4";
            }
        },
        validarSaldo() {
            this.getValor();
            if (this.valor > this.saldo) {
                Swal.fire("Error en saldo!", "Fondos insuficientes!", "error");
                return false;
            } else {
                return true;
            }
        },
        procesar() {
            var rta = this.validarSaldo();
            if (rta) {
                this.retirarDinero();
                this.agregarDetalle();
            } else {

            }
        },
        retirarDinero() {
            this.saldo -= this.valor;
            Swal.fire("Operación exitosa!", "Su dinero fue debitado correctamente! Su nuevo saldo es: " + this.saldo, "success");
        },

        agregarDetalle() {
            this.arrayValores.push(this.valor);
        }

    },
    computed:{
 
    }

});