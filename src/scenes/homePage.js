import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { default as theme } from '../../AppTheme.json'; // <-- Import app theme
import PubCard from '../components/pubCard';
import Header from '../components/header'
import PubMap from '../components/pubMap'
import { ScrollView } from 'react-native-gesture-handler';


export default function HomePage({ navigation }) {

  const [toggle, setToggle] = useState(true);
  
  const switchComponent = () => {
    setToggle(!toggle);
  };

    return(
      <Layout style={styles.container}>
            <Header/>

                {toggle ? (
                  <Layout>
                    <Layout style={styles.rowBox}>
                    <Text 
                    style={styles.textCurrent}
                    category="h6">Listvy</Text>                
                  <TouchableOpacity
                  onPress={() => {
                    switchComponent();
                }}
                >
                    <Text 
                    style={styles.text}
                    category="h6">Kartvy</Text>
                </TouchableOpacity>
            </Layout>
            <ScrollView>
              <PubCard navigation={navigation}/>
              </ScrollView>
                    </Layout>

                ) : (
                  <Layout>
                  <Layout style={styles.rowBox}>
                  <TouchableOpacity
                onPress={() => {
                  switchComponent();
              }}
              >
                  <Text 
                  style={styles.text}
                  category="h6">Listvy</Text>                
                  </TouchableOpacity>

                  <Text 
                  style={styles.textCurrent}
                  category="h6">Kartvy</Text>
          </Layout>
          <ScrollView>
            <PubMap navigation={navigation}/>
            </ScrollView>
                  </Layout>
                )}
                </Layout>

    )}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
},
rowBox: {
    backgroundColor: theme['color-primary-100'],
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: '3%'
  },
  text: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
  },
  textCurrent: {
    fontFamily: 'Montserrat_400Regular',
    paddingTop: '3%',
    color: theme['color-info-500'],
    textDecorationLine: 'underline'
  }
})


