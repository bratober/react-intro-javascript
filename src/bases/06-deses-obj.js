

// Desetructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};
// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);  
// console.log(clave);

const useContext = ({clave, nombre, edad, rango='Capitán'}) => {
    // console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        años: edad,
        latlng:{
            lat: 14.3232,
            lng: -12.3232
        }
    }
}
const {nombreClave, años, latlng:{lat, lng}} = useContext(persona);
console.log(nombreClave, años);
console.log(lat, lng);
