import React, {useEffect} from 'react';
import {Button, FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {SalirFBauth} from '../../../Modelo/FuncionesFirebaseAuth';

const PantallaListado = (props) => {
  const {RefreshData} = props;
  useEffect(() => {
    console.log('se cargo listado');
  }, []);

  const {stateListadoTareas} = props;
  const {ToOtherScreen, Posiciones} = props;
  const {nameScreen} = props;

  const ProyectosPendientes = [
    'todoListo',
    'Api rest en MERN',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
    'Doname',
  ];

  // console.log("'''''''''''''''''''''''''''''''''''''''''");
  // console.log(stateListadoTareas);
  // console.log(ProyectosPendientes);
  // console.log(stateListadoTareas[0].Skill);
  var id = 0;
  return (
    <SafeAreaView style={{backgroundColor: '#E91E63', flex: 1}}>
      <View style={{width: '33%'}}>
        <Text style={{fontSize: 48, color: '#fafafa'}}>{nameScreen}</Text>
      </View>

      <View>
        <FlatList
          data={stateListadoTareas}
          renderItem={({item}) => (
            <View
              style={{
                paddingBottom: 22,
                paddingTop: 22,
                paddingHorizontal: 18,
              }}>
              <View
                style={{
                  paddingBottom: 7,
                  borderBottomColor: '#fafafa',
                  borderBottomWidth: 2,
                  flexDirection: 'row',
                }}>
                {/* <Text style={{flex: 1}}>{item.estado}</Text> */}

                {item.estado == 0 ? (
                  <Image
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      resizeMode: 'contain',
                    }}
                    source={require('../../../images/esperando.png')}
                  />
                ) : (
                  <Image
                    style={{
                      flex: 1,
                      width: undefined,
                      height: undefined,
                      resizeMode: 'contain',
                    }}
                    source={require('../../../images/activado.png')}
                  />
                )}
                <Text
                  style={{
                    color: '#fafafa',
                    flex: 3,

                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
          )}
        />
        {/* <FlatList
          data={ProyectosPendientes}
          renderItem={({item}) => (
            <Text key={id++}>
              {id} {item}
            </Text>
          )}
        /> */}
      </View>

      <View>
        <Text>Settings del usuario actual</Text>
      </View>

      <Button
        title="Listado"
        // onPress={() => {
        //   ToOtherScreen(Posiciones.posList);
        // }}
        onPress={() => {
          RefreshData();
        }}
      />
      <Button
        title="Editar este ToDo"
        onPress={() => {
          ToOtherScreen(Posiciones.posEdit);
        }}
      />
      <Button
        title="Crear ToDo"
        onPress={() => {
          ToOtherScreen(Posiciones.posCreate);
        }}
      />
      <Button
        title="Configurar mi Perfil"
        onPress={() => {
          ToOtherScreen(Posiciones.posProfile);
        }}
      />
      <Button
        title="Log Out"
        onPress={() => {
          SalirFBauth();
        }}
      />
    </SafeAreaView>
  );
};

export default PantallaListado;

{
  /* <Text key={id++}></Text> */
}

{
  /* <Text>{item.deploy}</Text> */
}
{
  /* <Text>{item.description}</Text> */
}

{
  /* <Text>Requerimientos para este Proyecto</Text> */
}
{
  /* <Text>Habilidades</Text>
              {item.Skill.map((dato) => {
                return <Text>{dato}</Text>;
              })} */
}
{
  /* <Text>Plataforma de Trabajo</Text>
              {item.Platform.map((dato) => {
                return <Text>{dato}</Text>;
              })} */
}
{
  /* <Text>Area objetivo del Proyecto </Text>
              {item.Area.map((dato) => {
                return <Text>{dato}</Text>;
              })} */
}