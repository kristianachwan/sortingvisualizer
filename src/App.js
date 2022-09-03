import React from 'react';
import './App.css'; 
import { useState, useEffect, useRef } from 'react';
import MyNavbar from './components/MyNavbar';
import MyForm from './components/MyForm';
import BarGenerator from './generatorFunction/BarGenerator';
import RandomNumberArrayGenerator from './generatorFunction/RandomNumberArrayGenerator';
import { mergeSortAnimations } from './algorithms/mergeSort';
import { bubbleSortAnimations } from './algorithms/bubleSort'; 
import { quickSortAnimations } from './algorithms/quickSort';
import { selectionSortAnimations } from './algorithms/selectionSort';
import { insertionSortAnimations } from './algorithms/insertionSort'; 
import { ChakraProvider, theme, Button, ButtonGroup, Container } from '@chakra-ui/react' 

function App() {
  const numberOfElements = useRef(20) 
  const [array, setArray] = useState([])   
  const [animationSpeed, setAnimationSpeed] = useState(100/10); 
  


  // To generate ONCE at the start of rendering

  useEffect(() => {
    setArray(RandomNumberArrayGenerator(numberOfElements.current))
  }, [])
  const resetColor = () => {
    const bars = document.querySelectorAll('.bar')
    bars.forEach(bar => 
      bar.style.backgroundColor = '#6c757d' 
    )
  }
  // handleSubmit function to regenerate array
  const handleSubmit = (e) => {
    e.preventDefault() 
    setArray(RandomNumberArrayGenerator(numberOfElements.current)) 
    const chakraSlider = document.querySelector(".chakra-slider") 

    chakraSlider.removeAttribute('disabled', 'disabled')


  } 

  // animationspeed 
  // 1 is placeholder value, I shall make it varying (TODO)

  // animating sorting
  // animating animating mergeSort 
  const handleDisabled = () => {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(btn => {
      btn.classList.add('disabled')
      btn.setAttribute('disabled', 'disabled')
    })
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => 
      input.setAttribute('disabled', 'disabled')
      )
    const chakraSlider = document.querySelector(".chakra-slider") 
    chakraSlider.setAttribute('disabled', 'disabled')


  }

  const handleDisabledRecover = () => {
    const buttons = document.querySelectorAll('.btn')
    buttons.forEach(btn => {
      btn.classList.remove('disabled')
      btn.removeAttribute('disabled')
    })
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => 
      input.removeAttribute('disabled')
      )
  
  } 
  // Animating sorting
  // Animating mergeSort
  function animateMergeSort (array) {  
    resetColor()
    // get the animation array 
    const animations = mergeSortAnimations(array)
    // To prevent spam clicking
    handleDisabled()
    
    
    // iterate through animation (either swapping or changing color)
    for ( let i = 0; i < animations.length; i++) {
        // grab the whole 'bar' in the dom 
        const bars = document.querySelectorAll('.bar') 
        // we change the color twice: 
        // for each type of animating case 
        const [elementIndex1, elementIndex2, type] = animations[i]

        if (type == 'COMPARE') {
          setTimeout(() => {
            bars[elementIndex1].style.backgroundColor = '#c6e2ff'
            bars[elementIndex2].style.backgroundColor = '#c6e2ff'
            }, i*animationSpeed)
        } else if (type == 'UNCOMPARE') {
          setTimeout(() => {
            bars[elementIndex1].style.backgroundColor = '#6c757d'
            bars[elementIndex2].style.backgroundColor = '#6c757d'
            }, i*animationSpeed)
          
        } else if (type == 'OVERWRITE'){
          setTimeout(() => {
            bars[elementIndex1].style.height = `${elementIndex2*0.6}vh`
            }, i*animationSpeed)
        } else if (type == 'FIX') { 
          setTimeout(() => {
            bars[elementIndex1].style.backgroundColor = "#b7fcb7";
            }, i*animationSpeed)
        }
        } 
      // we make it not disabled anymore so that user can click anything again :)
      setTimeout(() => {
        handleDisabledRecover()  

      }, animations.length*animationSpeed)



  }

  // end of animating mergeSort 
  
  

  // animating bubble 
  function animateBubbleSort (array) { 
    resetColor()
    const animations = bubbleSortAnimations(array)    
    // To prevent spam clicking
    handleDisabled()
    for (let i = 0; i < animations.length; i++) { 
      // grab the whole 'bar' in the dom 
      const bars = document.querySelectorAll('.bar') 
      
      const [elementIndex1, elementIndex2, type] = animations[i]
      if (type == 'COMPARE') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#c6e2ff'
          bars[elementIndex2].style.backgroundColor = '#c6e2ff'
          }, i*animationSpeed)
      } else if (type == 'UNCOMPARE') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#6c757d'
          bars[elementIndex2].style.backgroundColor = '#6c757d'
          }, i*animationSpeed)
        
      } else if (type == 'SWAP'){
        setTimeout(() => {
          const barLength1 = bars[elementIndex1].style.height
          const barLength2 = bars[elementIndex2].style.height
          bars[elementIndex1].style.height = barLength2; 
          bars[elementIndex2].style.height = barLength1;
          }, i*animationSpeed)
      } else if (type == 'FIX') { 
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = "#b7fcb7";
          }, i*animationSpeed)
      } else if (type == 'ALREADY_SET') { 
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = "#D8D5DB";
          }, i*animationSpeed)
      }
    }
    setTimeout(() => {
      handleDisabledRecover()
    }, animations.length*animationSpeed)
  }
  // Animating insertionSort

  function animateInsertionSort (array) {
    resetColor()
    const animations = insertionSortAnimations(array)    
    // To prevent spam clicking
    handleDisabled()
    for (let i = 0; i < animations.length; i++) { 
      // grab the whole 'bar' in the dom 
      const bars = document.querySelectorAll('.bar') 
      
      const [elementIndex1, elementIndex2, type] = animations[i]
      if (type == 'COMPARE') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#c6e2ff'
          bars[elementIndex2].style.backgroundColor = '#c6e2ff'
          }, i*animationSpeed)
      } else if (type == 'UNCOMPARE') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#6c757d'
          bars[elementIndex2].style.backgroundColor = '#6c757d'
          }, i*animationSpeed)
      } else if (type == 'SWAP'){
        setTimeout(() => {
          const barLength1 = bars[elementIndex1].style.height
          const barLength2 = bars[elementIndex2].style.height
          bars[elementIndex1].style.height = barLength2; 
          bars[elementIndex2].style.height = barLength1;
          }, i*animationSpeed)
      } else if (type == 'FIX') { 
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = "#b7fcb7";
          }, i*animationSpeed)
      } 
    }
    setTimeout(() => {
      handleDisabledRecover()
    }, animations.length*animationSpeed)
  }

  // animating quicksort 
  function animateQuickSort (array) {
    resetColor()
    const animations = quickSortAnimations(array)    
    // To prevent spam clicking
    handleDisabled()
    for (let i = 0; i < animations.length; i++) { 
      // grab the whole 'bar' in the dom 
      const bars = document.querySelectorAll('.bar') 
      
      const [elementIndex1, elementIndex2, type] = animations[i]
      if (type == 'POINT') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#c6e2ff'
          bars[elementIndex2].style.backgroundColor = '#c6e2ff'
          }, i*animationSpeed)
      } else if (type == 'UNPOINT') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#6c757d'
          bars[elementIndex2].style.backgroundColor = '#6c757d'
          }, i*animationSpeed)
      } else if (type == 'SWAP'){
        setTimeout(() => {
          const barLength1 = bars[elementIndex1].style.height
          const barLength2 = bars[elementIndex2].style.height
          bars[elementIndex1].style.height = barLength2; 
          bars[elementIndex2].style.height = barLength1;
          }, i*animationSpeed)
      } else if (type == 'FIX') { 
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = "#b7fcb7";
          }, i*animationSpeed)
      } 
    }
    setTimeout(() => {
      handleDisabledRecover()
    }, animations.length*animationSpeed)
  }
  // end of animating quicksort 

  // animating selectionSort 
  function animateSelectionSort (array) {
    resetColor()
    const animations = selectionSortAnimations(array)    
    // To prevent spam clicking
    handleDisabled()
    for (let i = 0; i < animations.length; i++) { 
      // grab the whole 'bar' in the dom 
      const bars = document.querySelectorAll('.bar') 
      
      const [elementIndex1, elementIndex2, type] = animations[i]
      if (type == 'COMPARE') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#c6e2ff'
          bars[elementIndex2].style.backgroundColor = '#c6e2ff'
          }, i*animationSpeed)
      } else if (type == 'UNCOMPARE' || type == 'CANCEL_TENTATIVE_MIN') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = '#6c757d'
          bars[elementIndex2].style.backgroundColor = '#6c757d'
          }, i*animationSpeed)
      } else if (type == 'SWAP'){
        setTimeout(() => {
          const barLength1 = bars[elementIndex1].style.height
          const barLength2 = bars[elementIndex2].style.height
          bars[elementIndex1].style.height = barLength2; 
          bars[elementIndex2].style.height = barLength1;
          }, i*animationSpeed)
      } else if (type == 'FIX') { 
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = "#b7fcb7";
          }, i*animationSpeed)
      } else if (type == 'TENTATIVE_MIN') {
        setTimeout(() => {
          bars[elementIndex1].style.backgroundColor = "#D8D5DB";
          }, i*animationSpeed)
      } 
    }
    setTimeout(() => {
      handleDisabledRecover() 
    }, animations.length*animationSpeed) 
    
  }
  // end of animating sorting
  return (
    <ChakraProvider theme={theme}>
      <MyNavbar animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed} RandomNumberArrayGenerator={RandomNumberArrayGenerator} setArray={setArray} numberOfElements={numberOfElements.current} handleSubmit={handleSubmit}/> 
      {/* Input field */}
      <MyForm handleSubmit={handleSubmit} numberOfElements={numberOfElements}/>
      {/* Bars */}

      <BarGenerator array={array}/>

      {/* Button groups */}
      <div> 
            <Container display="flex" maxW="container.xl" alignItems="center" justifyContent="center" mt={4} flexWrap="wrap">    
                <Button className="btn" mx={3} my={2} colorScheme="facebook" size="sm" onClick={() => animateMergeSort(array)}>Merge Sort</Button>
                <Button className="btn" mx={3} my={2} colorScheme="facebook" size="sm" onClick={() => animateInsertionSort(array)}>Insertion Sort</Button>
                <Button className="btn" mx={3} my={2} colorScheme="facebook" size="sm" onClick={() => animateSelectionSort(array)} >Selection Sort</Button>
                <Button className="btn" mx={3} my={2} colorScheme="facebook" size="sm" onClick={() => animateBubbleSort(array)}>Bubble Sort</Button>
                <Button className="btn" mx={3} my={2} colorScheme="facebook" size="sm" onClick={() => animateQuickSort(array)}>Quick Sort</Button>

            </Container>
        </div>
    </ChakraProvider>
  );
}

export default App;
