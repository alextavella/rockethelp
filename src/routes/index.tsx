import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AppRoutes } from './app.routes'
import { SignIn } from '../screens'

export const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
