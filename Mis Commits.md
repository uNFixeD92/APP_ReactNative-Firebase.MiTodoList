# documentando mi proceso de desarrollo (y aprendizaje)

01/11/2020 Comienzo mi idea
agrege un logo , letras y boton para cambiar la pantalla por state (screen presentaicon y de app)

maquetacion de componente reutilizables dentro de la APP
definicion de  unos colores https://codepen.io/unfixed92/pen/pobVwOo
flex no funciona en scrollview area , logre usar su propia PROP 'contentContainerStyle={{flex:1}}'

02/11/2020 implementando login firebase
cree el proyecto web en https://firebase.google.com/
agregue firebase por yarn

estoy usando firebase para logearme , ahora es solo para mi correo

aun nose si sera la app solo para mi o permitire ingreso de otros usuarios ingresen.

hoy hice de forma manual el ingreso , pero era mas codigo asi que lo hice basado en el authOnchange para simplificar y movi los metodos a otro archivo porque me molesta leer tantos.

agrege conexion a firebase con auth

03/11/2020
usar ENV de forma facil en reacnative -> https://www.npmjs.com/package/react-native-dotenv
registrar usuarios.....en la basedatos x uid
buscar usuarios x uid en la db.
al ingresar se revisa que exista su CONFIG sino se va a crear una.

06/11/2020
obten los datos globales de DB
si el AuthStateChanged revisar si existe o no
guardar su UID , revisar que existe en DB
leer su BD y si no tiene configuracion asignarlas en otra pantalla de 'USERCONFIG'

07/11/2020
agregado contenido grafico , de funcion , reuso de componentes para mostrar las opciones al usuario,
luego debe agregar esto y subirlo para asignarlo a un usuario

09/11/2020
se capturas las opciones seleccionadas para establecer un nuevo perfil
se muestran las opciones seleccionadas para el usuario final (conocimientos,plataforma,areas de aprendizaje)

10/11/2020
algunas dudas de hoy ?
Como pasar contenido pasar de un componente a otro aqui no existe el path o url....
debi usar reacnative native navigator y no solo componentes ...

uso yarn add react-native-restart, ya que no use react navigator :/
se registrar nuevos usuarios , se puede ingresar
ya se actualizan y se crea el perfil del usuario




<!-- ///////////creacion de proyectos

-si es APPtodolist
voy a mostrar todo su contenido 
-->
