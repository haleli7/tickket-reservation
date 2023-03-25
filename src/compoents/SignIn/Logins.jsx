import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import React from 'react' ;


function Login() {
    return (
        <>
        <div>
    
        <Flex align="center" width="full" justifyContent="center">
          <Box pt={10}>
            <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>
            <Box my={5} textAlign="left">
              <form onSubmit={() => {}}>
                <FormControl>
                  <FormLabel>e-mail</FormLabel>
                  <Input name="e-mail" />
                </FormControl>
  
                <FormControl mt="4">
                  <FormLabel>Password</FormLabel>
                  <Input name="password" type="password" />
                </FormControl>
  
               
                <Button mt="4" width="full" type="submit">
                  Login
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </div>
        </>
     
    );
  }
  export default Login;