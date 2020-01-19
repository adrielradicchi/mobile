import React from 'react';
import { View } from 'react-native';
import { WebView} from 'react-native-webview';

function Profile({ navigation }){
    const githubUserName = navigation.getParam('github_username');
    return <WebView style={{felx: 1}} source={{uri: `https://github.com/${githubUserName}`}}/>
}

export default Profile;