import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Links = ["General", "Business", "Entertainment", "Health", "Science", "Sports", "Technology"]

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={"sticky"} top={0} zIndex={1}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <RouterLink to={"/"}>
                            <Box fontSize='2xl'>NewsMonkey</Box>
                        </RouterLink>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <RouterLink to={"/" + link.toLowerCase()} key={link}>
                                    <Box
                                        px={2}
                                        py={1}
                                        rounded={'md'}
                                        _hover={{
                                            textDecoration: 'none',
                                            // eslint-disable-next-line react-hooks/rules-of-hooks
                                            bg: useColorModeValue('gray.200', 'gray.700'),
                                        }}
                                    >
                                        {link}
                                    </Box>
                                </RouterLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'} >
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                        {/* <Spacer />
                        <Input />
                        <Spacer />
                        <IconButton
                            colorScheme='blue'
                            aria-label='Search database'
                            icon={<SearchIcon />}
                        /> */}
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <RouterLink to={"/" + link.toLowerCase()} key={link}>
                                    <Box
                                        px={2}
                                        py={1}
                                        rounded={'md'}
                                        _hover={{
                                            textDecoration: 'none',
                                            // eslint-disable-next-line react-hooks/rules-of-hooks
                                            bg: useColorModeValue('gray.200', 'gray.700'),
                                        }}
                                    >
                                        {link}
                                    </Box>
                                </RouterLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}