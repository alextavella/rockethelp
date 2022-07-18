import { Heading, Icon, useTheme, VStack } from 'native-base'
import { Envelope, Key } from 'phosphor-react-native'
import React from 'react'
import Logo from '../assets/logo_primary.svg'
import { Button, Input } from '../components'

export const SignIn: React.FC = () => {
  const { colors } = useTheme()

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSignIn = React.useCallback(() => {
    console.log(`Data:`, { email, password })
  }, [email, password])

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        InputLeftElement={
          <Icon ml={4} as={<Envelope color={colors.gray[300]} />} />
        }
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]} />} />}
        value={password}
        onChangeText={setPassword}
        mt={4}
      />

      <Button onPress={handleSignIn} mt={8} w="full">
        Entrar
      </Button>
    </VStack>
  )
}
