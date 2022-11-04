# api token login - micro-servicio
Api para uso de login mediante token, esta desarrollada con NodeJS y Express
## Cuenta con 3 rutas:
* / : Unicamente es un mensaje de que el server esta corriendo.
* /api/signup : En esta ruta te das de alta para poder obtener un token enviando en el body las credenciales para poder obtener el token. Se puede seguir desarrollando como por ejemplo agregar una base de datos para el registro.
```json
{
	"username": "admin",
	"password": 1234
}
{
	"login": "success",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjY3NTAzNTEyfQ.FqqUyzv78829NayUBz-rIzetQky9TyJYdSDteYk3bnY"
}
```
* /api/verify : En esta ruta verificamos el token enviado en el header y devolvemos algo para poder seguir operando de a cuerdo a lo de devolvamos. 
```json
{
	"token": "success"
}
```

## Contacto
[LinkedIn](https://www.linkedin.com/in/roseabdev/)
