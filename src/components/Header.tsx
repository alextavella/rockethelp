import { useNavigation } from '@react-navigation/native'
import { Heading, HStack, IconButton, useTheme } from 'native-base'
import { CaretLeft } from 'phosphor-react-native'
import React from 'react'

type HeaderProps = {
  title: string
}

export const Header: React.FC<HeaderProps> = ({ title, ...rest }) => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
    >
      <IconButton
        icon={<CaretLeft color={colors.gray[200]} size={24} />}
        mx={2}
        onPress={() => navigation.goBack()}
      />

      <Heading color="gray.100" textAlign="center" fontSize="lg" flex={0.6}>
        {title}
      </Heading>

      <IconButton mx={2} size={8} disabled />
    </HStack>
  )
}
