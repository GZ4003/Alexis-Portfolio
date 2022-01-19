import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title=" Hamburguesas-On-Fire">
    <Container>
      <Title>
        Hamburguesas-On-Fire<Badge>2021</Badge>
      </Title>
      <P>
        Lo arme basandome en un codigo que nos enseño mi profesor de la cursada
        pero tuve que cambiar algunos detalles para poder realizar bien las consignas
        en este caso use Html, Sass, Javacript para el carrito 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://proyecto-integrador-b94wj2we2-gz4003.vercel.app/">
          https://proyecto-integrador-b94wj2we2-gz4003.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html5,CSS,SASS,Javascript,NPM</span>
        </ListItem>
        
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
