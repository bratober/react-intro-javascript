import { getHeroesById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //Tarea
//         //Importen el
//         const p1 = getHeroesById(2);
//         // console.log(heroe);
//         resolve(p1);
//         // reject('No se pudo encontrar el heroe');
//         // console.log('2 segundos después');
//     }, 2000)
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // Importen el
            const p1 = getHeroesById(id);
            if (p1){
                resolve(p1);            
            }
            else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000)
    });
}
getHeroesByIdAsync(2).then(console.log)
.catch(console.warn);
