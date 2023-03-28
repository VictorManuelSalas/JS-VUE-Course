 /*

function enviarDatos() {
 
   
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    // Enviar los datos a una función
    procesarDatos(nombre, email);
}

function procesarDatos(nombre, email) {
    // Hacer algo con los datos
    


const data = { name: nombre, correo: email };
console.table(data)
fetch('https://webhook.site/44e6130a-bc2f-4224-bdad-750188cd83a2', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        console.log('Data sent successfully', response);
    })
    .catch(error => {
        console.error('Error sending data:', error);
    });
    
  

}*/