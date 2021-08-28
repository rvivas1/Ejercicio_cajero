var app = new Vue({
    el: '#app',
    data: {
        saldo: 500000,
        opcValor: 0,
        valor: 0

    },

    methods: {
        getvalor(){
            if(this.opcValor=="1")
            this.opcValor=10000;
            else if(this.opcValor=="2"){
            this.opcValor=20000;
            }
            else if(this.opcValor=="3"){
            this.opcValor=50000;
        }
            else if(this.opcValor=="4"){
            this.opcValor=10000;
            }

            }

        },
       validarSaldo(){
           if(this.valor > this.saldo){
            Swal.fire("Error en saldo!","Fondos insuficientes!","Error");
            return false;
        }else {
            return true;
        }
    },
    procesar() {
        var rta=this.validarSaldo();
        if (rta){
            this.retirarDinero();
        }else {
            
        }
    },
    retirarDinero(){
        this.saldo-=this.valor;
        Swal.fire("Operación exitosa!","Su dinero fue debitado correctamente! Su nuevo saldo es:"+this.saldo,"success");
       }

    }

});