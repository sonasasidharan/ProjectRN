// import React from 'react';
import LoginScreen from './src/components/screen/LoginScreen';

// export default function App() {
//   return <LoginScreen />;
// }
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';


export default function App() {
  return (
    <I18nextProvider i18next={i18next}>
     <LoginScreen />
    </I18nextProvider>
  );
}