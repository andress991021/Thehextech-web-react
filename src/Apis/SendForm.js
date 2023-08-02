export const SendForm = async  (Nombre,Email,Telefono,Empresa,Mensaje) =>{  


    return fetch('https://semillasrbc.com/formulario.php', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({Nombre,Email,Telefono,Empresa,Mensaje})
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch((error) => console.log(error));


}    