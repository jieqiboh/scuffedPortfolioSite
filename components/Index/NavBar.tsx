import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react"; //breadcrumbs

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
  useDisclosure,
} from "@chakra-ui/react"; //popover

import { HStack, Icon, Link } from "@chakra-ui/react"; //icons

import { BsGithub, BsInstagram } from "react-icons/bs";

const NavBar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Breadcrumb fontWeight="bold" fontSize="3xl" margin="1">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#" onClick={() => {
            window.scrollTo({
              behavior: "smooth",
              top: 999
          });
          }}>About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" onClick={onToggle}>
            Contact
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="bottom-end"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme="pink" h="0"></Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Find Me On:</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <HStack>
              <Link href="https://github.com/moral-outset">
                <Icon as={BsGithub} w={6} h={6} />
              </Link>
              <Link>
                <Icon as={BsInstagram} w={6} h={6} />
              </Link>
            </HStack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavBar;
