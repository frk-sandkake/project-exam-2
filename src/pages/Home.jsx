/** @format */
import { Flex, Text, Button } from "@radix-ui/themes"

export function Home() {
  return (
    <>
      <Flex direction='column' width='auto' gap='2' className='mx-auto w-80'>
        <Text>Hello from Radix Themes :)</Text>
        <Button size='2' variant='surface'>
            lets go...,
        </Button>
      </Flex>
    </>
  )
}
