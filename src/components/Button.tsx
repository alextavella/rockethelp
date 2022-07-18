import { Button as NativeBaseButton, IButtonProps, Heading } from 'native-base'
import React from 'react'

type ButtonProps = IButtonProps

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <NativeBaseButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{
        bg: 'green.500',
      }}
      {...rest}
    >
      <Heading color="white" fontSize="md">
        {children}
      </Heading>
    </NativeBaseButton>
  )
}
