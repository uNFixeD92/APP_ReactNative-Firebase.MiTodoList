import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

import UserConfig from '../configs/UserConfig';

// const animalitos = ['a', 'c', 'z'];
const ConfigsStart = (props) => {
  const {GlobalData} = props;
  const {ObjUSR} = props;
  console.log('#################CONFIG START################');
  return <UserConfig GlobalData={GlobalData} ObjUSR={ObjUSR} />;

  // return (
  //   <>

  //     <Text>llegaron los datos :Dddddddddd</Text>

  //     {/* <UserConfig datos={datos} /> */}
  //   </>
  // );

  // <UserConfig />;
};

export default ConfigsStart;
