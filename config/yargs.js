//Definicion de los comandos
const opts1 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea to do'
    }
}

const opts2 = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea to update'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca completado o pendiente una tares'
    }
}

const opts3 = {
    descripcion: {
        demand: true,
        alias: 'b',
        desc: 'Elimina la tarea to do'
    }
}

const argv = require('yargs')
    .command('crear', 'crear una tarea pendiente', opts1)
    .command('actualizar', 'actualiza una tarea pendiente', opts2)
    .command('borrar', 'elimina una tarea', opts3)
    .help()
    .argv;

module.exports = {
    argv
}