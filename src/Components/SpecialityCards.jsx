import React from 'react'

import { Box, Text} from '@chakra-ui/react';
function SpecialityCards({title, text,id}) {
  
  return (
      <div>
        <Box width="280px" display="flex" flexDirection="row" flexWrap="wrap">
          <section key={id}> 
              <Text  align="left" fontFamily="roboto" fontSize="25px" color="black" pb="50px" pt="50px" >{title}</Text>
              <Text align="left" fontSize="15px"fontFamily="roboto" color="black" >{text}</Text>
          </section>
        </Box>
      </div>
      
  )
}

SpecialityCards.propTypes = {

}

export default SpecialityCards

