import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Details, Home, Register } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

export const AppRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={Register} />
      <Screen name="details" component={Details} />
    </Navigator>
  )
}
