
import React, { useState} from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { Layout, Text, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme

export default function LandingPage() {

const [selectedIndex, setSelectedIndex] = useState();

return (
    <Layout style={styles.container}>
        <Layout style={styles.highLightBox}>
        <Text style={{margin: 40, textAlign: 'center', fontFamily: 'Montserrat_400Regular', color:"white"}}>Välj stad
        </Text>
            <Select
                style={styles.select}
                selectedIndex={selectedIndex}
                onSelect={title => setSelectedIndex(title)}>
                <SelectItem title='Göteborg'/>
                <SelectItem title='Stockholm'/>
                <SelectItem title='Malmö'/>
            </Select>
        </Layout>
    </Layout>
)
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fac3be',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme['color-primary-100'],
},
buttonStyle: {
    backgroundColor: theme['color-info-500'],
    borderWidth: 0,
    width: 100,
    height: 40,
    alignSelf: 'center',
    margin: 10,
},
select: {
    borderWidth: 0,
},
highLightBox: {
    backgroundColor: theme['color-primary-100'],
    margin: 2,
},
})