class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName() {
        let nombreCompleto = `${this.nombre} ${this.apellido}`
        return nombreCompleto
    }
    addMascota(nombreMascota) {
        this.mascotas.push(nombreMascota)
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        let libro = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(libro)
    }
    getBookNames() {
        let nombresDeLibros = []
        for (let i = 0; i < this.libros.length; i++) {
            const libro = this.libros[i];
            let nombreLibro = libro.nombre
            nombresDeLibros.push(nombreLibro)
        }
        return nombresDeLibros;
    }

}

let usuario = new Usuario('juan','perez',[],['kamba'])
let usuario1 = new Usuario('pedro', 'rodriguez',[], ['simon'])


usuario.addBook('padre rico padre pobre', 'robert kishosaki')

console.log(usuario1.getFullName())
console.log(usuario.getBookNames())
