import React from 'react'
import { Box, Flex,Text, Image} from '@chakra-ui/react';


function SkillsCards({title,img,text}) {
  return (
    <div>
      <Flex flexDirection="column" height="350px" width="350px" backgroundColor="#a2a2a2" borderRadius="20px" pl="30px" pr="20px">
        <Box display="flex" width="300px" height="100px" alignItems="center">
          <Image src={img} width="45px"></Image>
          <Text>{title}</Text>
        </Box>
        <Text align="left">{text}</Text>
      </Flex>
    </div>
  )
}


export default SkillsCards

