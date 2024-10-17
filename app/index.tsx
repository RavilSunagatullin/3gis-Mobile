import React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';

const MyWebView = () => {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://threegis-frontnend.onrender.com' }} // URL вашего Next.js проекта
                style={{ flex: 1 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MyWebView;
