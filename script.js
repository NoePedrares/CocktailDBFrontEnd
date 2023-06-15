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