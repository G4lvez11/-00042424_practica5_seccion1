const nuestroPrimeritoObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
};
console.log(nuestroPrimeritoObjeto);

const nombre = 'Fran Quesada';
const escuela = 'Ficticia';
const profesor = { nombre, escuela };
console.log(profesor);

const objeto = {
    propiedad1: 'Esta es mi propiedad original'
};
console.log(objeto);

objeto.propiedad2 = 'Esta es una propiedad nueva';
objeto.propiedad1 = 'Esta propiedad la modifico';
console.log(objeto);

const peligro = {
    propiedad1: 'Esta es mi propiedad original'
};
console.log(peligro);

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
};

const heroesDc = heroes.dc;
console.log(heroesDc);

const { dc } = heroes;
console.log(dc);

const dcHeroes = {
    heroes: {
        batman: {
            nombre: 'Bruce Wayne'
        },
        superman: {
            nombre: 'Clark Kent'
        }
    }
};

const { heroes: { batman } } = dcHeroes;
console.log(batman);

const objetoOriginal = {
    nombre: 'Fran Quesada',
    edad: 26,
};
console.log(objetoOriginal);

const objetoCongelado = Object.freeze(objetoOriginal);
console.log(objetoCongelado);

objetoCongelado.localidad = 'Madrid';
console.log(objetoCongelado);

const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid'
};
console.log(nuevoObjeto);