import { Badge, Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types'


function NewsItems({ sourceName, author, title, description, url, urlToImage, publishedAt }) {
    return (
        <Card
            as="a" target="_blank" href={url}
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginX={3}
            marginY={5}
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={urlToImage ? urlToImage : "https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"}
                alt='Img'
            />
            <Stack>
                <CardBody>
                    <Badge colorScheme='purple'>{sourceName}</Badge>
                    <Heading marginTop={2} size='md'>{title}</Heading>
                    <Text py='2'>{description}</Text>
                    <Text py='2'>By {author ? author : "Unknown"} On {new Date(publishedAt).toGMTString()}</Text>
                </CardBody>

                {/* <CardFooter>
                    <Button as="a" target="_blank" href={url} variant='solid' colorScheme='blue'>
                        Read More
                    </Button>
                </CardFooter> */}
            </Stack>
        </Card>
    )
}

export default NewsItems

NewsItems.propTypes = {
    sourceName: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
    publishedAt: PropTypes.string
}