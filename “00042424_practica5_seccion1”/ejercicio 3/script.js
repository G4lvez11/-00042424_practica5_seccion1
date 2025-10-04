const estanteria = {
  libros: [
    {
      nombre: 'El caballero oscuro',
      autor: 'Frank Miller',
      leido: false,
    },
    {
      nombre: 'El mundo amarillo',
      autor: 'Albert Espinosa',
      leido: false,
    },
    {
      nombre: 'Harry Potter y el cáliz de fuego',
      autor: 'J.K. Rowling',
      leido: true,
    },
    {
      nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      leido: false,
    },
    {
      nombre: 'Berserk',
      autor: 'Kentaro Miura',
      leido: true,
    },
    {
      nombre: 'It',
      autor: 'Stephen King',
      leido: false,
    }
  ],
  log() {
    const libros = this.libros;
    for (let i = 0; i < libros.length; i++) {
      const libro = libros[i];
      const resultado = libro.leido
        ? `Ya has leído ${libro.nombre} de ${libro.autor}`
        : `Aún no has leído ${libro.nombre} de ${libro.autor}`;
      console.log(resultado);

      let p = document.createElement("p");
      p.textContent = resultado;
      document.getElementById("resultado").appendChild(p);
    }
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const randomIndex = Math.floor(Math.random() * librosNoLeidos.length);
    const elementoRandom = librosNoLeidos[randomIndex];
    console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`);

    let sug = document.createElement("h3");
    sug.textContent = `Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`;
    document.getElementById("resultado").appendChild(sug);
  }
};

estanteria.log();
estanteria.sugerencia();
