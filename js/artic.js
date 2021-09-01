var app = new Vue({
  el: '#app',
  data: {
    opcValor: 0,
    priceTv: 980000,
    priceLav: 860000,
    arrayArtic:[],
    cant: null,
    total: 0

  },
  methods: {
    tArticulo() {
      if (this.opcValor == "1") {
        this.total += this.cant * this.priceTv;
      } else {
        this.total += this.cant * this.priceLav;

      }
      this.agregarDetalle();
    },
    agregarDetalle(){
      this.arrayArtic.push(this.total);

    }
  }

});