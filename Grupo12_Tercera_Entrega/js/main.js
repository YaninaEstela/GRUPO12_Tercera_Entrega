
/*Almacenar en Storage información ingresada por el usuario. 
Puede ser un texto, números, o combinación.*/ 


let usuarios = [
    {id: 1, nombre: "Maira Masdea", mail: "maira.masdea@gmail.com", encuesta: "Me gustaria tener informacion sobre semillas de albahaca"},
    {id: 2, nombre: "Estela Yanina ", mail: "yaninaestelataylor@gmail.com", encuesta: "Info sobre semillas de tomate"},
    {id: 3, nombre: "Thiermann Victoria", mail:"thiermannv@gmail.com", encuesta: "Semillas de lechuga"},
]

console.log(usuarios);
console.log(typeof usuarios);


//Agregar datos de usuarios y guardar en local storage

let nombre = prompt("Ingrese su nombre y apellido: ");
console.log(nombre);
localStorage.setItem("nombre del usuario",nombre);

let mail = prompt("Ingrese su correo electrónico: ");
console.log(mail);
localStorage.setItem("correo electronico",mail);

let encuesta = prompt("¿Qué información le gustaría que le brindemos sobre huertas urbanas");
console.log(encuesta);
localStorage.setItem("intereses",encuesta);

let id = usuarios.length + 1;

//Agregar usuario a la base de datos

usuarios.push({id: id, nombre: nombre, mail: mail, encuesta: encuesta});
alert("Su respuesta se guardó correctamente");

for(let i=0; i<usuarios.length; i++){
    console.log("id: " + usuarios[i].id, "Nombre: " + usuarios[i].nombre, "Correo electrónico: " + mail, "Intereses: " + encuesta)
}

let usuariosJson = JSON.stringify (usuarios);
console.log(usuariosJson);
console.log(typeof usuariosJson);



/*Crear base de datos en formato JSON, puede ser de productos, 
servicios o usuarios.*/ 

let semillas =`[
{"Id": 1, "Planta": "Acelga", "Modalidad de siembra": "Directa", "Días para cosecha": "60"},
{"Id": 2, "Planta": "Albahaca", "Modalidad de siembra": "Almácigo", "Días para cosecha": "80"},
{"Id": 3, "Planta": "Cebolla", "Modalidad de siembra": "Directa", "Días para cosecha": "250"},
{"Id": 4, "Planta": "Espinaca", "Modalidad de siembra": "Directa", "Días para cosecha": "90"},
{"Id": 5, "Planta": "Frutilla", "Modalidad de siembra": "Plantines", "Días para cosecha": "150"},
{"Id": 6, "Planta": "Lechuga", "Modalidad de siembra": "Almácigo", "Días para cosecha": "90"}
]`;
console.log(semillas);
console.log(typeof semillas);


/*Leer la base de datos desde un archivo JS y crear una función 
que nos deje agregar un nuevo elemento a la base de datos.*/

let semillasConvertido = JSON.parse(semillas);
console.log(semillasConvertido);
console.log(typeof semillasConvertido);


function agregarProducto(){

let id = semillasConvertido.length + 1;    
let planta = prompt("Ingrese el nombre de la planta a cultivar");
localStorage.setItem("especiePlanta",planta);
let modalidadSiembra = prompt("Ingrese la modalidad de siembra");
localStorage.setItem("tipoSiembra", modalidadSiembra);
let diasCosecha = prompt("Ingrese los días para cosecha");
localStorage.setItem("tiempoCosecha", diasCosecha);


semillasConvertido.push({"Id": id, "Planta": planta, "Modalidad de siembra": modalidadSiembra, "Días para cosecha": diasCosecha});
console.log("Producto agregado a la base de datos");
console.log(`Id: ${id}, Planta: ${planta}, Modalidad de siembra: ${modalidadSiembra}, Días para cosecha: ${diasCosecha}`);

};

agregarProducto();


/*Que el usuario pueda ver en nuestra app, información que 
tenemos guardada en nuestra base de datos.*/ 

console.log("La base datos contiene los siguientes productos: ");

function mostrarProductos(){
    for(let i=0; i<semillasConvertido.length; i++){
        console.log("Id: " + semillasConvertido[i].Id, "Planta: " + semillasConvertido[i].Planta, "Modalidad de siembra: " + semillasConvertido[i]["Modalidad de siembra"], "Días para cosecha: " + semillasConvertido[i]["Días para cosecha"]);
    }
};

mostrarProductos();  

