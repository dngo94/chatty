import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from "aws-amplify-react-native";
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import config from './src/aws-exports';
Amplify.configure(config);

// export default 
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // Auth.currentAuthenticatedUser().then(console.log);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

export default withAuthenticator(App);

// Amplify.configure({
//   Auth: {
//     // REQUIRED - Amazon Cognito Identity Pool ID
//     identityPoolId: 'us-west-1:e9b3b2c0-f225-40d4-8be4-b5acaf7e71b9', 
//     // REQUIRED - Amazon Cognito Region
//     region: 'us-west-1', 
//     // OPTIONAL - Amazon Cognito User Pool ID
//     userPoolId: 'us-west-1_tU6P889cT',
//     // OPTIONAL - Amazon Cognito Web Client ID
//     userPoolWebClientId: '2uvj00a0d4hhak0bbpllildsu2', 
//     oauth: {},
//   },
//   Analytics:{
//     disabled:true
//   },
// });

Amplify.configure({
  ...config,
  Analytics: { 
    disabled: true
  }
});