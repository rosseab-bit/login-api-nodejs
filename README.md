# api token login - micro-servicio
Api para uso de login mediante token esta desarrollada con NodeJS y Express
## Cuenta con 3 rutas:
* / : Unicamente es un mensaje de que el server esta corriendo.
* /api/signup : En esta ruta te das de alta para poder obtener un token. Se puede seguir desarrollando como por ejemplo para agregar una base de datos para el registro.
* /api/verify : En esta ruta verificamos el token y devolvemos algo para poder seguir operando de a cuerdo a lo de devolvamos. 
