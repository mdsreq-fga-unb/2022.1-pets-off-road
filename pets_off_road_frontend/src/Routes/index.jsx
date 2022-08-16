import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'
import { AppRoutes } from './App.routes';
import { Rts } from './Auth.routes';

function Routes() {
  const {signed} = useContext(AuthContext);

//   if (loading) {
//     return (
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       />
//     );
//   }

  if (signed === true) {
    // if (typeUser === 'Professor') {
    //   return <ProfRoutes />;
    // } else if (typeUser === 'Aluno') {
    //   return <AlunoRoutes />;
    // } else if (typeUser === 'Adm') {
    //   return <AdmRoutes />;
    // }
    return <AppRoutes />;
  } else {
    return <Rts />;
  }
}

export default Routes;