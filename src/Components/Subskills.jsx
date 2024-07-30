import React from 'react'
import { Box, Flex,Text, Image} from '@chakra-ui/react';


function Subskills({img,text}) {
  
  return (
      <div>
        <Flex pr="80px">
          <Image src={img} width="45px"></Image>
          <Text>{text}</Text>
        </Flex>
      </div>
      
  )
}
export default Subskills

