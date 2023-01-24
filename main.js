alert('Bienvenido/a a la tienda oficial del Central de bebidas!')

let nombre = prompt('Cual es tu nombre: ')
console.log('Nombre: ',nombre)

let bebida = parseInt(prompt('Que bebida desea tomar?, Coloque el numero: 1) Gaseosa, 2) Alcohol, 3) Aguita.'))

switch (bebida){

    // Gaseosa
    case 1:
    gaseosas = parseInt(prompt('Que Gaseosa desea tomar?, Coloque el numero: 1) Coca Cola, 2) Fanta, 3) Sprite.'))
    if (gaseosas === 1){
        metodoDePago =  parseInt(prompt('El valor es $450 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
        if (metodoDePago === 2){
            cuotas = 450 / 12 
            alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
            console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        }else{
            alert('Total a pagar son $450 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
            console.log('Total a pagar son $450 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        }
    }
    if (gaseosas === 2){
        metodoDePago =  parseInt(prompt('El valor es $420 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
        if (metodoDePago === 2){
            cuotas = 420 / 12 
            alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
            console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        }else{
            alert('Total a pagar son $420 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
            console.log('Total a pagar son $420 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        }
    }
    if (gaseosas === 3){
        metodoDePago =  parseInt(prompt('El valor es $400 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
        if (metodoDePago === 2){
            cuotas = 400 / 12 
            alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
            console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        }else{
            alert('Total a pagar son $400 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
            console.log('Total a pagar son $400 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        }
    }
    break;

    // Alcohol
    case 2:
    edad = parseInt(prompt('Que edad tiene: '))
    if (edad < 18){
        alert('Sos menor de edad, Anda pa afuera.')
        console.log('Sos menor de edad, Anda pa afuera.')
        break;
    }
    alcoholes = parseInt(prompt('Que Alcohol desea tomar?, Coloque el numero: 1) Vodka, 2) Fernet, 3) Vino Malbec'))
    if (alcoholes === 1){
        metodoDePago =  parseInt(prompt('El valor es $1700 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
        if (metodoDePago === 2){
            cuotas = 1700 / 12 
            alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
            console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        }else{
            alert('Total a pagar son $1700 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
            console.log('Total a pagar son $1700 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        }
    }
    if (alcoholes === 2){
        metodoDePago =  parseInt(prompt('El valor es $2000 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
        if (metodoDePago === 2){
            cuotas = 2000 / 12 
            alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
            console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        }else{
            alert('Total a pagar son $2000 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
            console.log('Total a pagar son $2000 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        }
    }
    if (alcoholes === 3){
        metodoDePago =  parseInt(prompt('El valor es $10000 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
        if (metodoDePago === 2){
            cuotas = 10000 / 12 
            alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
            console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        }else{
            alert('Total a pagar son $10000 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
            console.log('Total a pagar son $10000 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        }
    }
    break;
    // Agua
    case 3:
    metodoDePago =  parseInt(prompt('El valor es $350 pesos, como desea pagarlo?, coloque el numero: 1) En 1 pago, 2) 12 Cuotas sin interes :)'))
    if (metodoDePago === 2){
        cuotas = 350 / 12 
        alert('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
        console.log('Total a pagar son 12 cuotas de: $' + cuotas + ' pesos')
    }else{
        alert('Total a pagar son $350 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
        console.log('Total a pagar son $350 pesos. "Pagalo ya antes de que suban los precios de vuelta XD"')
    }
    break;
}





