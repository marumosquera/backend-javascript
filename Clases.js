// 1) Declarar una clase Usuario
// 2) Hacer que Usuario cuente con los siguientes atributos:
// nombre: String
// apellido: String
// libros: Object[]
// mascotas: String[]

// Los valores de los atributos se deberán cargar a través del constructor, al momento de crear las instancias.

// 3) Hacer que Usuario cuente con los siguientes métodos:
// getFullName(): String. Retorna el completo del usuario. Utilizar template strings.
// addMascota(String): void. Recibe un nombre de mascota y lo agrega al array de mascotas.
// countMascotas(): Number. Retorna la cantidad de mascotas que tiene el usuario.
// addBook(String, String): void. Recibe un string 'nombre' y un string 'autor' y debe agregar un objeto: { nombre: String, autor: String } al array de libros.
// getBookNames(): String[]. Retorna un array con sólo los nombres del array de libros del usuario.

// 4) Crear un objeto llamado usuario con valores arbitrarios e invocar todos sus métodos.

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return console.log(`Nombre completo: ${this.nombre} ${this.apellido}`)
    }

    addMascotas(mascota) {
       const mascotasArray =  this.mascotas.push(mascota);
       return mascotasArray
    }

    countMascotas() {
        return console.log("countMascotas =>", this.mascotas.length)
    }

    addBook (nombre, autor) {
       const books = this.libros.push({nombre,autor});
       return console.log("books =>",books)
    }

    getBookName () {
        return console.log("bookName =>",this.libros[0].nombre)
    }

}

const usuario = new Usuario ('Maria', 'Mosquera', [], []);

usuario.getFullName();
usuario.addBook('nombre del libro', 'autor del libro');
usuario.getBookName();
usuario.addMascotas('perro');
usuario.addMascotas('gato');
usuario.countMascotas();

console.log(usuario)