import { Text, Container, Button, Slider, SliderMark, Tooltip, SliderThumb, SliderFilledTrack, SliderTrack  } from "@chakra-ui/react"; 
import { useState } from 'react'
function MyNavbar({ handleSubmit, animationSpeed, setAnimationSpeed}) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (

      <Container mt={2} maxW="xxl" display="flex" alignContent="center" justifyContent="center">
        <Container mx={0}>
          <Text className="lead">Speed: </Text> 

          
          <Slider 
            id='slider'
            defaultValue={100/animationSpeed}
            min={0.1}
            max={100}
            colorScheme='teal'
            onChange={(speed) => setAnimationSpeed(100/speed)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
              25%
            </SliderMark>
            <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
              50%
            </SliderMark>
            <SliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
              75%
            </SliderMark>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <Tooltip
              hasArrow
              bg='teal.500'
              color='white'
              placement='top'
              isOpen={showTooltip}
              label={`${parseInt(100/animationSpeed)}%`}
            >
              <SliderThumb />
            </Tooltip>
          </Slider>
        </Container>
      <Button className="btn" mx={3} my={5} colorScheme="facebook" size='sm'  onClick={handleSubmit}>
          Randomize
      </Button> 
      </Container>
  );
}

export default MyNavbar;