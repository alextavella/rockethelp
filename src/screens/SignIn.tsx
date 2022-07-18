import React from 'react'
import { VStack, Heading } from 'native-base'

export const SignIn: React.FC = () => (
  <VStack flex={1} alignItems="center" bg="gray.600" pt={24}>
    <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
      Ola SignIn
    </Heading>
  </VStack>
)
