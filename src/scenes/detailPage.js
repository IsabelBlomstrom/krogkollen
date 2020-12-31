import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout } from '@ui-kitten/components'
import { default as theme } from '../../AppTheme.json' // <-- Import app theme
import DetailCard from "../components/detailCard"


export default function DetailPage() {

  return(

    <Layout style={styles.container}>
      <DetailCard />
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme['color-primary-100'],
  }
})



