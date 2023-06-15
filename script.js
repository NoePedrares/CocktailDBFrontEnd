document.getElementById('insertar').addEventListener('click', insertarCocktail);

function insertarCocktail() {
   let valorNombre = document.getElementById('inputNombre').value;
   let valorReceta = document.getElementById('inputReceta').value;
   let valorFoto = document.getElementById('inputFoto').value;

   fetch('https://localhost:7234/api/cocktail',
{
   method: 'POST',
   headers:
   {
      'Content-Type': 'application/json'      
   },
   body: JSON.stringify({nombre: valorNombre, receta: valorReceta, fotoSrc: valorFoto})
   
});
}

document.getElementById('buscar').addEventListener('click', buscarCocktail);
function buscarCocktail(){
   let nombre = document.getElementById('inputBuscar').value;
   fetch('https://localhost:7234/api/cocktail/buscar/' + nombre,
   {
      method: 'GET',
   })
   .then((response) => response.json())
   .then((data) => leerFora(data) );

}
function leerFora(data) {
    document.getElementById('cockteles').innerHTML = '';
    let nombre, instruction, foto, id;
    let div = document.createElement('div');
    div.className = 'individual';
    document.getElementById('cockteles').appendChild(div);
    nombre = document.createElement('h2');
    nombre.innerHTML = data.nombre;
    div.appendChild(nombre);
    id = document.createElement('h5');
    id.innerHTML = `Id del cocktail: ${data.id}`;
    div.appendChild(id);
    instruction = document.createElement('p');
    instruction.innerHTML = data.receta;
    div.appendChild(instruction);
    foto = document.createElement('img');
    foto.src = data.fotoSrc;
    div.appendChild(foto);   
 };