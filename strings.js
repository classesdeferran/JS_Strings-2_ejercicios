// Métodos de Strings

let text_1 = "Hoy es viernes"

// Maneras de definir un String
let manera_1 = "Hola" // con doble comillas
let manera_2 = 'Hola' // con comilla simple
let manera_3 = `Hola` // con acento grave


// lenght --> longitud de la cadena
console.log(`La variable tiene ${text_1.length} caracteres`)

// charAt() --> obtenemos el caracter por la posición
console.log(text_1.charAt(0))
console.log(text_1.at(0))
console.log(text_1.at(-1))

console.log(text_1[0])

// slice --> corta la cadena y extrae la parte cortada
let text_2 = text_1.slice(0, 4)
let text_3 = text_1.slice(4, 14)
let text_4 = text_1.slice(4)
console.log(text_2)
console.log(text_3)
console.log(text_4)

// substr --> extrae desde una posición inicial el número de caracteres que le indiquemos
let text_5 = text_1.substr(7)
console.log(text_5)

// toUpperCase() --> pone todo el texto en mayúsculas
let text_6 = text_1.toUpperCase()
console.log(text_6)

// toLowerCase() --> pone todo el texto en minúsculas
let text_7 = text_1.toLowerCase()
console.log(text_7)

let nombre = "fERRan"
let registro = "ferran"

if (nombre.toLowerCase() == registro) {
    console.log("Es el mismo usuario")
} else {
    console.log("No sé quien es")
}

// toLocaleUpperCase() --> pone todo el texto en mayúsculas
let text_8 = text_1.toLocaleUpperCase()
console.log(text_8)

// toLocaleLowerCase() --> pone todo el texto en minúsculas
let text_9 = text_1.toLocaleLowerCase()
console.log(text_9)

// concat --> unir strings
let buenos = "Buenos"
let dias = "días"
let saludo_completo_1 = buenos + " " + dias // "Buenos días"
let saludo_completo_2 = buenos.concat(", ", dias) 
console.log(saludo_completo_2)

// trim --> elimina los espacios al principio y al final de la cadena
let usuario = "      María del Mar       "
console.log(usuario.length)
let usuario_corregido = usuario.trim()
console.log(usuario_corregido.length)

// trimStart --> quita los espacios solo al principio
// trimEnd --> quita los espacios solo al final

// repeat --> repite una cadena
console.log("Hola ".repeat(3))

// replace --> reemplaza la primera aparición de un texto por otro
console.log(text_1)
console.log(text_1.replace("viernes", "jueves"))

let text_10 = "Me gusta mucho mucho mucho Javascript"
console.log(text_10.replace("mucho", "poco"))

// replaceAll
console.log(text_10.replaceAll("mucho", "poco"))

// split --> convierte un string en array
let nombre_completo = "Peter Pan" // "Pan, Peter"
let nombre_array = nombre_completo.split(" ")
console.log(nombre_array)
let nombre_final = nombre_array[1] + ", " + nombre_array[0]
console.log(nombre_final)

// includes --> nos dice si una cadena está contenida (incluida) en otra
let prueba = "Buenos días"
console.log(prueba.includes("Buenos"));
console.log(prueba.includes("buenos"));



// Tenemos este nombre 
let cliente1 = "  poppins, mary   " // Quremos obtener : "Mary Poppins"
let cliente2 = "  mouse, mickey   " // También para : "Mickey Mouse"

// Mejora del código anterior (en una segunda versión)
let cliente3 = "  de los anillos, el señor   " // "El Señor De Los Anillos"
let cliente4 = "     spiderman       "



// Otro ejercicio : nos han dado esta fecha:
let fecha = "29-02-2024" // Hay que obtener : "2024-02-29"



