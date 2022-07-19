import { useNavigation } from '@react-navigation/native'
import {
  Center,
  FlatList,
  Heading,
  HStack,
  IconButton,
  Text,
  useTheme,
  VStack,
} from 'native-base'
import { ChatTeardropText, SignOut } from 'phosphor-react-native'
import React from 'react'
import Logo from '../assets/logo_secondary.svg'
import { Button, Filter, Order, OrderProps } from '../components'

type SelectedStatusType = 'opened' | 'closed'

export const Home: React.FC = () => {
  const { colors } = useTheme()
  const navigation = useNavigation()

  const [selectedStatus, setSelectedStatus] =
    React.useState<SelectedStatusType>('opened')

  const [orders, setOrders] = React.useState<OrderProps[]>([
    {
      id: '1',
      patrimony: '123456',
      when: '18/07/2022 às 22:00',
      status: 'opened',
    },
    {
      id: '2',
      patrimony: '123456',
      when: '18/07/2022 às 22:00',
      status: 'closed',
    },
  ])

  const handlePressOrder = React.useCallback((orderId: string) => {
    navigation.navigate('details', { orderId })
  }, [])

  const handlePressNewOrder = React.useCallback(() => {
    navigation.navigate('new')
  }, [])

  return (
    <VStack flex="1" pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.200">Solicitações</Heading>
          <Text color="gray.200">{orders.length}</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="opened"
            title="em andamento"
            onPress={() => setSelectedStatus('opened')}
            isActive={selectedStatus === 'opened'}
          />
          <Filter
            type="closed"
            title="finalizados"
            onPress={() => setSelectedStatus('closed')}
            isActive={selectedStatus === 'closed'}
          />
        </HStack>

        <FlatList
          data={orders.filter(item => item.status === selectedStatus)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Order order={item} onPress={() => handlePressOrder(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={40} color={colors.gray[300]} />
              <Text color="gray.300" fontSize="xl" mt={4} textAlign="center">
                Você ainda não possui {`\n`}
                solicitações{' '}
                {selectedStatus === 'opened' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button onPress={handlePressNewOrder}>Nova sollicitação</Button>
      </VStack>
    </VStack>
  )
}
