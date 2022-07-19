import {
  Box,
  Circle,
  HStack,
  IPressableProps,
  Pressable,
  Text,
  useTheme,
  VStack,
} from 'native-base'
import {
  CircleWavyCheck,
  ClockAfternoon,
  Hourglass,
} from 'phosphor-react-native'
import React from 'react'

export type OrderProps = {
  id: string
  patrimony: string
  when: string
  status: 'opened' | 'closed'
}

type Props = IPressableProps & {
  order: OrderProps
}

export const Order: React.FC<Props> = ({ order, ...rest }) => {
  const { colors } = useTheme()

  const statusColorType =
    order.status === 'opened' ? colors.secondary[700] : colors.green[300]

  return (
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={statusColorType} />

        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">
            Patrimônio: {order.patrimony}
          </Text>

          <HStack>
            <ClockAfternoon size={15} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs" ml={1}>
              {order.when}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {order.status === 'closed' ? (
            <CircleWavyCheck size={24} color={statusColorType} />
          ) : (
            <Hourglass size={24} color={statusColorType} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  )
}
