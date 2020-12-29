import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text} from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme


export default function HomePage({ navigation }) {

    return(
        <Layout style={styles.container}>
            <Text 
            style={styles.text}
            category="h3">HEJJJ</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme['color-primary-100'],
    alignContent: "center",
},
text: {
    alignSelf: "center",
    fontFamily: 'Montserrat_400Regular', 
},
})


