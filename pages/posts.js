import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={40} mb={4} >
        Aun no hay ningun Posteo
      </Heading>

      
    </Container>
  </Layout>
)

export default Posts
