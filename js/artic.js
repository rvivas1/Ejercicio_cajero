var app = new Vue({
  el: '#app',
  data: {
    opcValor: 0,
    priceTv: 980000,
    priceLav: 860000,
    arrayArtic:[],
    nombArtic: "",
    prArtic: "",
    cant: null,
    total: 0

  },
  methods: {
    tArticulo() {
      if (this.opcValor == "1") {
        this.total += this.cant * this.priceTv;
        this.nombArtic="Televisor"
        this.prArtic= this.priceTv;
        
      } else {
        this.total += this.cant * this.priceLav;
        this.nombArtic="Lavadora"
        this.prArtic= this.priceLav;

      }
      this.agregarDetalle();
    },
    agregarDetalle(){
      this.arrayArtic.push({nombre:this.nombArtic,cant:this.cant,precio:this.prArtic,total:this.total});

    }
  }

});