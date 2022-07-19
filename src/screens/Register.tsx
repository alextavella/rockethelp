import { VStack } from 'native-base'
import React from 'react'
import { Button, Header, Input } from '../components'

export const Register: React.FC = () => {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação" />

      <Input placeholder="Número do patrimônio" mt={4} />

      <Input
        placeholder="Descrição do problema"
        flex={1}
        mt={4}
        multiline
        textAlignVertical="top"
      />

      <Button mt={5}>Cadastrar</Button>
    </VStack>
  )
}
