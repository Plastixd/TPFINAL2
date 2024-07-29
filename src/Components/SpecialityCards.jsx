import React from 'react'

import { Box, Text} from '@chakra-ui/react';
function SpecialityCards({title, text,id}) {
  
  return (
      <div>
        <Box width="320px" display="flex" flexDirection="row" border="1px" borderColor="red" flexWrap="wrap">
          <section key={id}> 
              <Text align="left" pb="50px" pt="50px">{title}</Text>
              <Text align="left">{text}</Text>
          </section>
        </Box>
      </div>
      
  )
}

SpecialityCards.propTypes = {

}

export default SpecialityCards

