import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { themeGet } from 'styled-system'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import {
  Box,
  Flex,
  Heading,
  Text,
} from 'flokit'
import { Button, Container, Emoji } from '../components'

const HomePage = ({ data }) => {
  const { title, description, author, install, github } = data.site.siteMetadata

  return (
    <>
      <GlobalStyle />

      <Helmet defer={false}>
        <html lang='en' />

        <title>{title}</title>

        <meta name='description' content={description} />
        <meta name='author' content={author} />

        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap'
          rel='stylesheet'
        />
      </Helmet>

      <Flex
        as='section'
        alignItems='center'
        width='100vw'
        height='100vh'
        bg='#010101'
        css={{
          backgroundImage: 'linear-gradient(to right, rgba(1,1,1,.8), rgba(1,1,1,.4)), url("https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container>
          <Heading
            as='h1'
            display='inline-flex'
            fontSize={9}
          >
            <Emoji symbol='🚢' label='ship' />
            <Box width='12px' />
            {title}
          </Heading>

          <Heading
            as='h2'
            mt={2}
            fontSize={6}
            fontWeight={2}
          >
            {description}
          </Heading>

          <Flex mt={3}>
            <Button disabled>
              <Emoji symbol='📄' docs='docs' />
              <Box width='12px' />
              Docs
            </Button>

            <Button
              variant='tertiary'
              as='a'
              href={github}
              ml={2}
            >
              <svg width='28' height='28' fill='#e5e5e5' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
              </svg>
              <Box width='12px' />
              Github
            </Button>
          </Flex>

          <Text
            mt={4}
            color='#999998'
          >
            {install}
          </Text>
        </Container>
      </Flex>
    </>
  )
}

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
        description
        author
        install
        github
      }
    }
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    -webkit-tap-highlight-color: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${themeGet('fonts.body')};
    font-size: ${themeGet('fontSizes.5')};
    color: ${themeGet('colors.white')};
  }
`

export default HomePage
