function convertPrize(){
    let dolarCompra = 109.69;
    let dolarVenta = 115.69;
    let valorIngresado = prompt("Ingrese un valor en pesos");

    let paraCompra = Math.round((valorIngresado * 1) / dolarCompra); 

    let paraVenta = Math.round((valorIngresado * 1) / dolarVenta);

    alert("El monto ingresado equivale a $" +  paraCompra + " para la compra, y a $" + paraVenta + " para la venta. Los montos estan redondeados")
}