/*
    TP3: Objetos - Cuentas bancarias
    Desarrollo de Aplicaciones Informáticas - 5to Informática 2021

    ----------------------------------------------------------------

    Se dispone de una lista, array, vector, o como quieran denominarlo, compuesta por objetos. 
    El vector va a contener todas las cuentas bancarias de un determinado banco.

    La página nos servirá tanto para ver información sobre los clientes del banco como para modificar el dato de una
    cuenta bancaria determinada.

    Todas las funciones que usted genere para realizar las consignas deberán ubicarse en este archivo .js
    
    PARÁMETROS DEL OBJETO TIPO "CLIENTE":
    -------------------------------------
    Cada objeto tendrá como parámetros la información básica de los clientes de un banco, la cual es mínimamente:
    1) DNI del cliente (va a actuar como ID).
    2) Nombre del cliente.
    3) Apellido del cliente.
    4) Saldo en pesos (sea positivo o negativo) que tiene el cliente con el banco.
    5) Saldo en dólares (siempre positivo) que tiene el cliente con el banco.
    6) Consumos en la tarjeta de crédito: 
        Será un vector de objetos dónde cada objeto será un consumo en particular.
        Por ejemplo, si el cliente hizo una compra en un supermercado por $ 1000, deberá haber una posición de este
        vector que tenga en sus parámetros los datos "Supermercado" y "1000".
        Todos los consumos se guardarán en la moneda pesos para simplificar el código.
    7) Saldo a pagar de la tarjeta de crédito: 
        Guarda la plata que el cliente le debe al banco, por no haber pagado aún la tarjeta de forma completa.
        Este monto puede ser positivo (si el cliente le debe plata al banco), 0 (si se pagó todo al día) o negativo
        (si el cliente, cuando efectuó el pago de la tarjeta, pagó más de lo que debía. Sí, puede pasar en la realidad.)

    MÉTODOS DEL OBJETO TIPO "CLIENTE":
    ----------------------------------
    Así como también contendrá métodos para realizar operaciones con esta cuenta bancaria:

    1) Extrar dinero de la cuenta: -- LISTO --
        El método solicitará por parámetros cuánta plata se desea retirar y de qué cuenta (si la de pesos o la de 
        dólares). En caso de que se desee retirar de la cuenta en dólares se debe verificar que haya saldo suficiente 
        en la cuenta antes de hacer la extracción. De la cuenta en pesos se puede extraer aunque no haya saldo 
        suficiente (quedará con saldo negativo, como un deudor).
        Este método devolverá "true" si se pudo realizar la extracción y "false" si no se pudo.

    2) Ingresar dinero en la cuenta: -- LISTO --
        El método solicitará por parámetro cuánta plata se va a ingresar y a qué cuenta (pesos o dólares).

    3) Transferir dinero a otra cuenta: -- LISTO --
        El método podrá solicitará o el DNI de la cuenta destino o el objeto cuenta destino para realizar la 
        transferencia. A su vez, también debe solicitar cuánta plata se desea transferir.
        Este método deberá utilizar al método 1) para realizar la extracción y al método 2) de la cuenta que recibe 
        el dinero.
        Realizar este método solo para una cuenta (sea la de pesos o la de dólares, a gusto).

    4) Pago realizado con tarjeta: -- LISTO --
        El método recibirá el nombre del comercio dónde se efectuó el pago y el monto de la compra. Deberá crear un 
        nuevo objeto y cargarlo en el vector de consumos de tarjeta del respectivo cliente (parámetro 6).
        Cada compra nueva deberá sumar su valor al parámetro "saldo a pagar de la tarjeta", parámetro 7).

    5) Pagar tarjeta:  -- LISTO --
        El método recibirá el monto que abonó el cliente de la tarjeta (puede que no haya realizado el pago completo) 
        y debitará el mismo monto del saldo a pagar de la tarjeta (parámetro 7). En caso de que el cliente pague más 
        plata que la que debe, le quedará saldo a favor (el parámetro del saldo a pagar quedará en negativo).

    CONSIGNAS:
    ----------
    1) Idear una clase con la estructura que va a tener cada objeto "cliente". Debe contemplar los parámetros arriba
        descriptos.  -- LISTO --

    2) Idear una clase con la estructura que va a tener cada objeto "compra con tarjeta de crédito". Debe contemplar
        los parámetros arriba descriptos. -- LISTO -- 

    3) Implementar los 5 métodos solicitados dentro de la clase "cliente" (o como quiera llamarla). --LISTO--

    4) Crear un vector de objetos de los clientes y precargarle por código al menos 3 clientes (esto para no tener que 
        cargar todos esos datos cada vez que se recargue la página, como les sucede con el TP2). -- LISTO --

    5) Implementar una función para el botón "Obtener mayor" que me indique cuál es el cliente que tiene más plata en 
        todo el banco. La información de este cliente se deberá mostrar por DOM.

    6) Implementar una función para el botón "Obtener menor" que me indique cuál es el cliente que tiene menos plata
        en todo el banco (no cuentan los clientes con saldo negativo). La información de este cliente se deberá mostrar
        por DOM.

    7) Implementar una función para el botón "Obtener mayor dólares" que me indique cuál es el cliente que tiene más 
        plata en dólares en todo el banco. La información de este cliente se deberá mostrar por DOM. Sería buena idea
        modificar la función del punto 5 para que reciba un parámetro que indique en qué moneda se quiere buscar.

    8) Implementar una función para el botón "Obtener menor dólares" que me indique cuál es el cliente que tiene menos 
        plata en dólares en todo el banco. La información de este cliente se deberá mostrar por DOM. Sería buena idea 
        modificar la función del punto 6 para que reciba un parámetro que indique en qué moneda se quiere buscar. --ya esta--

    9) Implementar una función para el botón "Listar clientes" que muestre todos los clientes del banco en una tabla.
        Indicar en la misma los datos que usted quiera, mínimamente apellido y DNI. --YA ESTA--

    10) Implementar una función para el botón "Listar clientes CSV" que muestre todos los clientes del banco por 
        consola. Se deberá mostrar en el formato "Apellido1, Nombre1; Apellido2, Nombre2; Apellido3, Nombre3; etc.".
        NOTA: CSV es un formato estándar de manejo de información. Viene de "valores separados por comas" y se utiliza
        muchísimo en programas como Excel.

    11) Implementar una función para el botón "Listar morosos" que muestre todos los clientes del banco que tengan
        su cuenta en pesos con saldo negativo en una tabla. Indicar en la misma los datos que usted quiera, mínimamente 
        apellido y DNI.

    12) A partir del texto ingresado en un cuadro de texto, implementar una función que me permita buscar un cliente
        por su nombre o su DNI. Todas las coincidencias que encuentre las deberá mostrar en una tabla.
        Cuando se presione sobre una posición de la tabla, la información más detallada de ese cliente se deberá mostrar
        en el mismo lugar dónde mostraron los datos en los ejercicios 5, 6, 7, 8...

    13) Implementar una función para que, a partir de los datos de los selects cliente que transfiere el dinero, cliente 
        que recibe el dinero y el input monto a transferir, realice la transferencia de efectivo. Para la transferencia, 
        debe usar el método disponible en el objeto que contiene al cliente.

    14) Implementar una función para que, a partir de los datos del select cliente que realizó el consumo y los inputs 
        nombre del local y consumo realizado, se agregue un nuevo consumo a la tarjeta de crédito de un cliente.
        Para esta acción, debe usar el método disponible en el objeto que contiene al cliente.

    15) Implementar una función para que, a partir de los datos del cliente que va a pagar la tarjeta y el input monto
        a pagar, se vuelque el pago de una tarjeta en el objeto que contiene al cliente correspondiente. Para esta
        acción, debe usar el método disponible en el objeto que contiene al cliente.

    16) Implementar una función para el botón "Agregar un cliente nuevo". El mismo deberá ocultar todos los botones que
        aparecen en pantalla para solicitar información al sistema y mostrar un formulario para el ingreso de los 
        datos del nuevo cliente.

    17) Implementar una función para un botón que ingrese los datos del nuevo cliente. El mismo deberá crear el nuevo
        objeto "cliente" dentro del vector correspondiente, ocultar el formulario de carga de cliente nuevo y mostrar
        nuevamente todos los botones en los que yo puedo solicitar información al sistema.
        La carga del nuevo cliente se deberá realizar si y solo si el usuario completó todos los datos solicitados por
        el sistema y el saldo ingresado para la cuenta en dólares es positivo. Si no, deberá mantenerse la pantalla como
        está y mostrar algún tipo de alerta (sea con alert o de otra forma) que indique el error ocurrido.
        NOTA: El nuevo cliente siempre ingresa sin consumos en su tarjeta.

    18) OPCIONAL: Agregar un botón extra al formulario que nos permita cancelar el ingreso de un nuevo cliente y volver
        a la "pantalla principal" sin haber ingresado nada.

    19) OPCIONAL: Igual que en el TP2, utilizar el "localStorage" del navegador para almacenar los clientes y que no se
        pierdan cada vez que recargan la página.

    NOTA 1: Recuerden que su mayores activos de trabajo son la consola, los trabajos que ya realizó y el propio 
        navegador en donde podrán buscar información en Internet. Ya en este punto de la materia es fundamental 
        entrenar estas tres habilidades.

    NOTA 2: Se recomienda el uso de la etiqueta <div> para encapsular muchos elementos que quieran ser ocultados y 
        mostrados. Pero, para el caso de los inputs para ingresar datos nuevos, se suelen encapsular en una etiqueta
        <form>. Esto es porque dicha etiqueta es muy útil cuando se trabaja con backend. Considere usarla para la carga
        del nuevo cliente al menos.

    NOTA 3: Se adjunta video del funcionamiento final del trabajo. La estética no tiene por qué ser exacta. Apliquen
        su propia creatividad, sin perder mucho tiempo en la misma.

    A trabajar! Éxitos!
*/


class Cliente{
    constructor(dni, nombre, apellido, saldoEnPesos, saldoEnDolares){
        this.dni = dni
        this.nombre = nombre
        this.apellido = apellido
        this.saldoEnPesos = saldoEnPesos
        this.saldoEnDolares = saldoEnDolares
        this.consumosTajeta = []
        this.saldoAPagarTarjeta = 0
    }

    extraerDinero(unaCantidad, queCuenta){
        if(this[queCuenta] == this.saldoEnDolares && this.saldoEnDolares < unaCantidad){
            return false;
        }else{
            return true;
        }
    }

    ingresarDinero(unaCantidad, queCuenta){
        this[queCuenta] += unaCantidad;
    }

    transferirDinero(identificadorCuenta, unaCantidad){
        this.extraerDinero(unaCantidad, 'saldoEnPesos')
        this.saldoEnPesos -= unaCantidad

        if(typeof identificadorCuenta == 'number'){
            for(let i=0 ; i<clientesBanco.length ; i++){
                (clientesBanco[i].dni == identificadorCuenta) && clientesBanco[i].ingresarDinero(unaCantidad,'saldoEnPesos') 
            } 
        }else if(typeof identificadorCuenta == 'object'){
            identificadorCuenta.ingresarDinero(unaCantidad,'saldoEnPesos');
        }else{
            console.log("El identificador ingreasado no existe (no es ni el dni ni el objeto)")
        }
    }
    
    pagarConTarjeta(compra, monto){
        let unaCompra = new ComprasRealizadas(compra, monto);
        this.consumosTajeta.push(unaCompra);
        this.saldoAPagarTarjeta += monto;
    }

    pagarTarjeta(monto){
        if(this.saldoAPagarTarjeta <= 0){
            alert("Tu saldo ya es negativo o cero, no hay ninguna deuda para pagar")
        }else{
            this.saldoAPagarTarjeta -= monto;
        }
        
    }
}


class ComprasRealizadas{
    constructor(compra, monto){
        this.compra = compra
        this.monto = monto
    }
}

let clientesBanco = [];

const cliente1 = new Cliente(12812846, 'Raul', 'Gómez',87000,500);
const cliente2 = new Cliente(25654321, 'Sebastián', 'Perez',-15200,3900);
const cliente3 = new Cliente(40654321, 'Julieta', 'Albornoz', 7300, 5000);

clientesBanco.push(cliente1,cliente2,cliente3);


function obtenerDatos(queCuenta,mayorOMenor){

    // ----------- establece cual es el cliente a mostar ---------------

    var clientesBancoLocal = Object.assign([],clientesBanco)
    var saldosDeClientes = clientesBancoLocal.map(i => i[queCuenta] );
    var cliente;

    if(mayorOMenor === 'mayor'){
        cliente = clientesBancoLocal[ saldosDeClientes.indexOf(Math.max(...saldosDeClientes)) ];

    }else if(mayorOMenor === 'menor'){
        for(let i=0 ; saldosDeClientes.length>i ; i++){
            if(saldosDeClientes[i]<0){
                saldosDeClientes.splice(i,1);
                clientesBancoLocal.splice(i,1);
            }
        }
        cliente = clientesBancoLocal[ saldosDeClientes.indexOf(Math.min(...saldosDeClientes)) ];
    }
    
    
    // -----------------------------------------------------------------

    let infoCuenta = document.getElementById("infoCuenta").innerHTML;
    
    infoCuenta = `
    <h3>Información de la cuenta</h3>
    <h5>Cliente solicitado:</h5>
    <ul>
        <li>DNI: <b>${cliente.dni}</b></li>
        <li>Apellido: <b>${cliente.apellido}</b></li>
        <li>Nombre: <b>${cliente.nombre}</b></li>
        <li>Saldo en cuenta en pesos: <b>$ ${cliente.saldoEnPesos}</b></li>
        <li>Saldo en cuenta en dólares: <b>U$S ${cliente.saldoEnDolares}</b></li>
        <li>Saldo pendiente de pago en la tarjeta: <b>$ ${cliente.saldoAPagarTarjeta}</b></li>
    `

    if(cliente.consumosTajeta.length === 0){
        infoCuenta += `
            <li>Últimos consumos: <b>Aún no hay consumos</b></li>
        </ul>`
    }else{
        infoCuenta += `
            <li>Últimos consumos:</li>
        </ul>
        <table class="table">
            <thead><bold>
                <tr>
                    <th>Local</th>
                    <th>Consumo</th>
                </tr>
            <bold></thead>
        <tbody id="tableBody">`

        for(let i=0 ; cliente.consumosTajeta.length>i ; i++){
            infoCuenta += `
            <tr>
                <td>${cliente.consumosTajeta[i].compra}</td>
                <td>${cliente.consumosTajeta[i].monto}</td>
            </tr>`
        }

        infoCuenta += `</tbody>`
    }

    document.getElementById("infoCuenta").innerHTML = infoCuenta;
}

function obtenerMayor(){
    obtenerDatos('saldoEnPesos','mayor');
}

function obtenerMayorDolares(){
    obtenerDatos('saldoEnDolares','mayor');
}

function obtenerMenor(){
    obtenerDatos('saldoEnPesos','menor');
}

function obtenerMenorDolares(){
    obtenerDatos('saldoEnDolares','menor');
}



function listarClientes(){
    tablaClientes = document.getElementById("listadoClientes").innerHTML
    tablaClientes += `
    <thead>
    <tr>
        <th>DNI</th>
        <th>Apellido</th>
        <th>Nombre</th>
    </tr>
    </thead>
    <tbody>
    `

    for(let i=0 ; clientesBanco.length>i ; i++){
        tablaClientes += `
        <tr>
        <td> <b>${clientesBanco[i].dni}</b> </td>
        <td> ${clientesBanco[i].apellido} </td>
        <td> ${clientesBanco[i].nombre} </td>
        `
    }
    document.getElementById("listadoClientes").innerHTML = tablaClientes
}


function listarClientesCSV(){
    console.log(clientesBanco)
    let listadoCSV="";
    for(let i=0;clientesBanco.length>i;i++){
        listadoCSV += `${clientesBanco[i].apellido}, ${clientesBanco[i].nombre}`;
        (i != clientesBanco.length-1)&&(listadoCSV+=`; `);
    };
    console.log(listadoCSV);
}

function listarMorosos(){
    let listadoMorosos= clientesBanco.map(i => indexOf(clientesBanco[i].saldoEnPesos<0));

    tablaMorosos = document.getElementById("listadoMorosos").innerHTML
    tablaMorosos += `
    <thead>
    <tr>
        <th>DNI</th>
        <th>Apellido</th>
        <th>Nombre</th>
    </tr>
    </thead>
    <tbody>
    `

    for(let i=0 ; listadoMorosos.length>i ; i++){
        tablaClientes += `
        <tr>
        <td> <b>${listadoMorosos[i].dni}</b> </td>
        <td> ${listadoMorosos[i].apellido} </td>
        <td> ${listadoMorosos[i].nombre} </td>
        `
    }
    document.getElementById("listadoMorosos").innerHTML = tablaMorosos
}