import { Text, Input, Container } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
export default function MyForm({ handleSubmit, numberOfElements}) {
  return (
    <Container textAlign="center">
      <form onSubmit={handleSubmit}>
          <label>
            <Text display="inline-block">Number of elements: </Text>  
            <Container maxW="100px" display="inline-block">
              <Input 
              onChange={(e) => numberOfElements.current = e.target.value} 
              className="rounded text-center" 
              type="number" 
              min={5} 
              max={300}
            />
          </Container>
            
          </label>
      </form>
    </Container>
  )
}
