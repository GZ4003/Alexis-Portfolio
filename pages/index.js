import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {  IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, yo soy un full-stack developer que vive en Argentina!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Alexis Gomez 
          </Heading>
          <p>Programador ( Diseño web / Front-End  )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/alexis.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Perfil
        </Heading>
        <Paragraph>
        Soy Alexis Gabriel Gomez me desempeño por ser un Front-end actualmente estoy estudiando
        para ser un Full-Stack. Me gusta realizar páginas de todo tipo pero en especial las páginas web 
        para tiendas, por ahora estoy practicando el lenguaje React pero pronto seguiré con React Native
        ya que el área de teléfonos móviles es lo que más despierta mi interés. 
        Vivo en Buenos Aires y no tengo problema en trabajar de forma remota.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Mi Portafolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Nací el 12 de Julio en Buenos Aires, Argentina.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Termine mi etapa de cursar en la escuela Eccleston en Lanus 
          donde estaba en la sección de Economía
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Yo inicié mis estudios en Nucba para ser un Full-Stack en la formación de MERN.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Actualmente me encuentro en busqueda de nuevos Proyectos,Empresas o Socios en los cuales 
          pueda seguir progresando en este lindo mundo 
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Mis gustos son♥
        </Heading>
        <Paragraph>
          Los videojuegos, animes, mangas, en cuanto a musica me gusta cualquier genero pero 
          mis favoritos son el heavy metal y soundtrack de juegos o anime. El futbol y las artes 
          marciales son mis deportes favoritos 
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Redes Sociales
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/GZ4003" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @GZ4003
              </Button>
            </Link>
          </ListItem>
          
          <ListItem>
            <Link href="https://www.linkedin.com/in/alexis-gabriel-gomez-728374217/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                @Mi-linkedln
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/alexis.itf/?hl=es-la" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @alexis.itf
              </Button>
            </Link>
          </ListItem>
        </List>

        

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Posteos realizados
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
