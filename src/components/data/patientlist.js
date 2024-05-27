import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const columns = [
    { name: "NombreS", selector: "nombre", sortable: true },
    { name: "CI", selector: "ci", sortable: true },
    { name: "Género", selector: "sexo", sortable: true },
    { name: "Edad", selector: "edad", sortable: true }, // Cambiado de "Edad" a "edad"
    { name: "Dirección", selector: "direccion", sortable: true },
    { name: "Teléfono", selector: "telefono", sortable: true },
    { name: "Estado Civil", selector: "estadoCivil", sortable: true },
    { name: "Correo ", selector: "email", sortable: true },
    { name: "Acción", cell: row => <div data-tag="allowRowEvents" ><Link to='#'><i className='fas fa-pencil-alt ms-text-primary' /></Link> <Link to='#'><i className='far fa-trash-alt ms-text-danger' /></Link></div>, sortable: true },
];


