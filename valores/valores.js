var miauto = {
    marca:"toyota",
    modelo:"corolla",
    annio:2020,
    detalledelauto: function(){
        console.log(`auto ${this.modelo} ${this.annio}`);
    }

};

// funcion constructora 

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("tesla", "modelo 3", 2020);

var articulo = [
    {nombre: "bici", costo:3000},
    {nombre: "TV", costo:320},
    {nombre:"celular", costo: 320},
    {nombre:"laptop", costo: 20000},
    {nombre:"teclado", costo: 500},
    {nombre:"audifonos", costo:1700},
];

var encuentraArticulo = articulo.find(function(articulo){
    return articulo.nombre === "laptop"
});

articulo.forEach(function(articulo){
    console.log(articulo.nombre)
});

var articulosbaratos = articulo.some(function(articulo){
   return articulo.costo<=700;
});

