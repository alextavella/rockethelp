import { Button, IButtonProps, Text, useTheme } from 'native-base'
import React from 'react'

type FilterProps = IButtonProps & {
  title: string
  isActive?: boolean
  type: 'opened' | 'closed'
}

export const Filter: React.FC<FilterProps> = ({
  title,
  isActive = false,
  type,
  ...rest
}) => {
  const { colors } = useTheme()

  const colorType =
    type === 'opened' ? colors.secondary[700] : colors.green[300]

  return (
    <Button
      variant="outline"
      borderWidth={isActive ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text
        color={isActive ? colorType : colors.gray[300]}
        fontSize="xs"
        textTransform="uppercase"
      >
        {title}
      </Text>
    </Button>
  )
}
