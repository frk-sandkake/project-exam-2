/** @format */

import { Container, Heading, TextField } from "@radix-ui/themes"

export function Footer() {
  return (
    <Container py='9'>
      <Heading>I'm footer</Heading>
      <TextField.Input placeholder='Enter your full name' />
    </Container>
  )
}
