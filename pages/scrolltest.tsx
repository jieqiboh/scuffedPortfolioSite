import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    ButtonGroup,
    PopoverFooter,
    PopoverCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

export default function ScrollTest() {
    const { isOpen, onToggle, onClose } = useDisclosure()
  
    return (
      <>
        <Button mr={5} onClick={onToggle}>
          Trigger
        </Button>
        <Popover
          returnFocusOnClose={false}
          isOpen={isOpen}
          onClose={onClose}
          placement='right'
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Button colorScheme='pink'>Popover Target</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Are you sure you want to continue with your action?
            </PopoverBody>
            <PopoverFooter display='flex' justifyContent='flex-end'>
              <ButtonGroup size='sm'>
                <Button variant='outline'>Cancel</Button>
                <Button colorScheme='red'>Apply</Button>
              </ButtonGroup>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      </>
    )
  }