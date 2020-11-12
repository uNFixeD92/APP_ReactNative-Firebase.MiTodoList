import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import firebase from '../libs/Firebase';

export default function paraFirebaseAuth() {
  return (
    <View>
      <Text>hola</Text>
    </View>
  );
} //////////////////////////////////////////////////////
// OBTENER DATOS DE FIREBASE
// todos los datos personales del usuario

// todos los documentos del UID usuario

// todos los documentos de x tipo dentro de este UID

// CRUD DE FIREBASE
export const SalirFBauth = (props) => {
  firebase.auth().signOut();
};

// registrandome en FB
export const RegistroAuthFB = (props) => {
  var email = props.email;
  var password = props.password;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      var datosnuevo = firebase.auth().currentUser;
      firebase
        .database()
        .ref('usuarios/' + datosnuevo.uid)
        .set({
          uid: datosnuevo.uid,
          email: datosnuevo.email,
        });
    })
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert(errorCode + ' ' + errorMessage);
    });

  // console.log(res);
  //paso obligatorio registrar este usuario en la base de datos
};

// INGRESANDO en fb AUTH
export const IngresarFBauth = (props) => {
  var email = props.email;
  var password = props.password;
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      Alert.alert(error.toString());
    });
};

//usuario tiene su CONFIGURACION areas,platforms,skills DEFINIDOS?
export const ConfigPerfilUsuario = (uid, setObjUSR) => {
  firebase
    .database()
    .ref('/usuarios/' + uid + '/Areas')
    .once('value', function (snapshot) {
      setObjUSR(snapshot.val());
    });
  console.log(
    'ConfigPerfilUsuario-ConfigPerfilUsuario-ConfigPerfilUsuario-ConfigPerfilUsuario-ConfigPerfilUsuario-',
  );
};

// antes de que exista informacion en BD debemos insertar informacion
//usuario registrado en db?
export const ExisteUIDenDB = (uid, setObjUSR) => {
  firebase
    .database()
    .ref('/usuarios/')
    .child(uid)
    .once('value', function (snapshot) {
      console.log('----------------------------------');
      console.log(uid);
      console.log(snapshot.val());
      console.log('----------------------------------');
      setObjUSR(snapshot.val());

      // console.log('UID de Nuestro USUARIO');
      // console.log(uid);
      // console.log('ESTAMOS RECIBIENDO ESTA FUNCION PARA SETEAR , LLEGO???? func')
      // console.log(setObjUSR)
      // console.log('a ObjUSR se le PASARON SUS DATOS!!!!!!!!!!!!!!!!!!!!!!!!!');
    });
};

// uid actual del usuario ?
export const UIDcurrentUser = () => {
  return firebase.auth().currentUser.uid;
};

// creamos usuario en BD con su UID
export const CreandoUsuarioFB = (user) => {
  firebase
    .database()
    .ref('usuarios/' + user.uid)
    .set(user);
};

// creamos usuario en BD con su UID
export const AgregandoSettingEntorno = (user) => {
  // firebase
  //   .database()
  //   .ref('usuarios/' + user.uid)
  //   .set(user);
};

///////////// traer entorno para configuracion desde FB DATABASE
export const TraerDatosFBConfig = (setGlobalData) => {
  firebase
    .database()
    .ref('DatosPlataforma/')
    .once('value', function (dataSnapshot) {
      setGlobalData(dataSnapshot.val());
    })
    .then(console.log('ya pedimos todos los datos'));
};

// firebase
//   .database()
//   .ref('/usuarios/' + 'identificador')
//   .once('value', (snapshot) => {
//     console.log(snapshot.val());
//   });

// acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// import React, {useEffect, useState} from 'react';
// import {Alert, StyleSheet, Text, View} from 'react-native';
// import firebase from '../libs/Firebase';

// export default function paraFirebaseAuth() {
//   return (
//     <View>
//       <Text>hola</Text>
//     </View>
//   );
// } //////////////////////////////////////////////////////
// // OBTENER DATOS DE FIREBASE
// // todos los datos personales del usuario

// // todos los documentos del UID usuario

// // todos los documentos de x tipo dentro de este UID

// // CRUD DE FIREBASE
// export const SalirFBauth = (props) => {
//   firebase.auth().signOut();
// };

// // registrandome en FB
// export const RegistroAuthFB = (props) => {
//   var email = props.email;
//   var password = props.password;

//   return firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .catch(function (error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       Alert.alert(errorCode + ' ' + errorMessage);
//     });
// };

// // INGRESANDO en fb AUTH
// export const IngresarFBauth = (props) => {
//   var email = props.email;
//   var password = props.password;
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .catch((error) => {
//       Alert.alert(error.toString());
//     });

//   // firebase.auth().currentUser  !== null ? console.log(firebase.auth().currentUser): console.log(firebase.auth().currentUser)
// };
// //aca estoy trabajando ahora
// /// usuario tiene un UID y corroe en BD? el usuario tiene su configuracion?
// // export const EntornoUsuarioPrepradado = (uid, setObjUSR) => {
// //   firebase
// //     .database()
// //     .ref('/usuarios/' + uid)
// //     .once('value', function (snapshot) {
// //       // setObjUSR(snapshot.val());
// //     });
// // };

// //usuario tiene su CONFIGURACION areas,platforms,skills DEFINIDOS?
// //creo que esta funcion es basura
// export const ConfigPerfilUsuario = (uid, setObjUSR) => {
//   firebase
//     .database()
//     .ref('/usuarios/' + uid + '/Areas')
//     .once('value', function (snapshot) {
//       setObjUSR(snapshot.val());
//     });
// };

// //usuario registrado en db?
// export const ExisteUIDenDB = (uid, setObjUSR) => {
//   firebase
//     .database()
//     .ref('/usuarios/')
//     .child(uid)
//     .once('value', function (snapshot) {
//       setObjUSR(snapshot.val());
//     });
// };

// // uid actual del usuario ?
// export const UIDcurrentUser = () => {
//   return firebase.auth().currentUser.uid;
// };

// // creamos usuario en BD con su UID
// export const CreandoUsuarioFB = (user) => {
//   firebase
//     .database()
//     .ref('usuarios/' + user.uid)
//     .set(user);
// };
export const ActualizandoDatos = (user) => {
  firebase
    .database()
    .ref('usuarios/' + user.uid)
    .set(user);
};

// // creamos usuario en BD con su UID
// export const AgregandoSettingEntorno = (user) => {
//   firebase
//     .database()
//     .ref('usuarios/' + user.uid)
//     .set(user);
// };

// ///////////// traer entorno para configuracion desde FB DATABASE
// export const TraerDatosFBConfig = (setGlobalData) => {
//   firebase
//     .database()
//     .ref('DatosPlataforma/')
//     .once('value', function (dataSnapshot) {
//       setGlobalData(dataSnapshot.val());
//     })
//     .then(console.log('ya pedimos todos los datos'));
// };

// // firebase
// //   .database()
// //   .ref('/usuarios/' + 'identificador')
// //   .once('value', (snapshot) => {
// //     console.log(snapshot.val());
// //   });
