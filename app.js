/*
Fucionalidades:
* Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto
  y lo agregarán a una lista visible al hacer clic en "Adicionar".

* Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta
  pidiendo un nombre válido.

* Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo
  de entrada.

* Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleato-
  riamente un nombre de la lista y se mostrará en la página.
*/

let lista_nombres = [];

function sortearAmigo(){
    if (lista_nombres.length >= 2){
        document.getElementById('buttonAgregar').setAttribute('disabled', true);

        // Generar número aleatorio
        eliminar_indice = Math.floor(Math.random()*lista_nombres.length);

        // Mostrar el nombre sorteado
        let nombre = document.getElementById('resultado');
        nombre.innerHTML = `Amigo sorteado: ${lista_nombres[eliminar_indice]}`;

        // Eliminar el nombre de la lista y mostrar lista actualizada
        lista_nombres.splice(eliminar_indice, 1);
        //document.querySelector('#listaAmigos').value = '';
        mostrar_lista(lista_nombres, 'listaAmigos');
        if (lista_nombres.length === 1) {
            alert("Solo queda un nombre, puedes agregar más si lo deseas.");
            document.getElementById('buttonAgregar').disabled = false;
            lista_nombres.splice(0, lista_nombres.length);
        }
    }
    else{
        alert('Ingrese mínimo dos nombres');
    }
}

function mostrar_lista(lista_amigos, elemento){
    let referencia = document.getElementById(elemento);
    referencia.innerHTML = '';
    
    // Agregar cada elemento de la lista
    for (let i=0; i<lista_amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = lista_amigos[i];
        referencia.appendChild(li);
    }
}

function agregarAmigo(seccion){
    //clic boton y seleccionar valor de campo
    nombre = document.getElementById('amigo').value;
    if (nombre == ''){    
        alert('Ingrese un nombre válido');
    }
    else{
        document.querySelector('#resultado').value = '';
        // Agregar nombre a una lista y borrar valor de campo
        lista_nombres.push(nombre);
        document.querySelector('input').value = '';
        document.querySelector('#resultado').innerHTML = '';
        mostrar_lista(lista_nombres, 'listaAmigos');

    }
}

