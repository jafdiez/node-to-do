const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/db.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);

    });

}

const leerDB = () => {
    try {
        listadoPorHacer = require('../db/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    leerDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    leerDB();
    // ya cargado -> listadoPorHacer
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const crear = (descripcion) => {


    let porHacer = {
        descripcion,
        completado: false
    };
    leerDB();
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const borrar = (descripcion) => {
    leerDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
    //guardarDB
}