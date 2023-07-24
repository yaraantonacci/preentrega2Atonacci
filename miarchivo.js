alert('Bienvenidos a la Tienda de Tortas!!!');
alert('A continuación podrán visualizar nuestra carta y realizar su compra online');


let producto = prompt('1-Torta de Cumpleaños - $4500\n2-Torta Orep - $4000\n3-Cheesecake Frutos Rojos- $3800\n4-Chocotorta - $3500\n5-LemonPie - $3500\n6-Torta Tofee - $3000\n0-Para salir de la lista de productos y/o finalizar tu compra');

let contador = -1


//Productos para comprar

const productos = [
 {id:1,nombre:"Torta de Cumpleaños",precio:4500,cantidad:0},
 {id:2,nombre:"Torta Oreo",precio:4000,cantidad:0},
 {id:3,nombre:"Cheesecake Frutos Rojos",precio:3800,cantidad:0},
 {id:4,nombre:"Chocotorta",precio:3500,cantidad:0},
 {id:5,nombre:"Lemonpie",precio:3500,cantidad:0},
 {id:6,nombre:"Torta Tofee",precio:3000,cantidad:0},
]
console.table(productos); 

//Carrito de compras vacio, donde van a ingresar los valores de las tortas.
let carrito = []

function buscarTorta (idTorta) {
    //busca en el array productos el numero del objeto y si se encuentra dentro del array, es decir, compara chocolates.numero con el numChocolate ingresado.
    let verificacion = productos.find ((productos) => productos.id === parseInt(idTorta))
    return verificacion


}

let ac = 0
let precioTotal = 0

class Total {
    //Inicializacion de carrito de compras
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) { //Medimos si es superior a 0 el largo de la funcion
            for (let index = 0; index <= contador; index++) {
                //se multiplica la cantidad de productos por el precio
                ac = carrito[index].precio * carrito[index].cantidad
                precioTotal += ac
            }
            
            return precioTotal
        }
    }
}


function finalizarCompra() {
    //Se incova a la clase Total con el operador new
    const compra = new Total(carrito)
    console.log(`El costo total de su compra es de $ ${compra.obtenerSubtotal()}. Muchas gracias por tu compra!`)
    alert (`El costo total de su compra es de $ ${compra.obtenerSubtotal()}. Muchas gracias por tu compra!`)
}

function algoMas(){
    //se evalua si seguir comprando o no
    let respuesta2 = confirm ('¿Deseas llevar otra Torta? ')

    if (respuesta2 === true) {
        comprarTorta ();
    }
    else {
        finalizarCompra()
    }
}

function comprarTorta(){
    let idTorta = prompt ('Ingresa la Torta que deseas comprar (numero de id)')
    //ingresa a la funcion buscarTorta()
    let tortaElegida = buscarTorta (idTorta)
    if (tortaElegida !== undefined) {
        contador++
        carrito.push(tortaElegida)

        //se modifica en el array carrito la cantidad de tortas
        carrito[contador].cantidad = prompt ('Ingresa la cantidade de unidades que deseas comprar')

        alert('Usted eligio el ' + tortaElegida.nombre + ' con la cantidad de ' + carrito[contador].cantidad + ' productos. Se agrego al CARRITO 🛒')
        algoMas()

        } 
  
    else {
        alert ('⚠ ERROR EN EL CODIGO INGRESADO. Refresca para comenzar de nuevo ⚠')
    }
  }

  comprarTorta()


