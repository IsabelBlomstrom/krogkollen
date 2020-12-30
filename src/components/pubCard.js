import React from 'react'
import { Layout, Text, Card} from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { default as theme } from '../../AppTheme.json';

export default function Homepage({ navigation }){

    return(
        <Layout>
            <Card>
                <Text>

                </Text>
            </Card>
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