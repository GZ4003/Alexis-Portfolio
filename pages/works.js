import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Proyectos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        
        

       
       
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Trabajos profesionales
        </Heading>
      </Section>

    

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
            Proyectos simples
        </Heading>
      </Section>

      
    </Container>
  </Layout>
)

export default Works

