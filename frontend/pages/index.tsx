import styles from '../styles/Home.module.css'
import { Box, Heading, Header, StyledOcticon, Avatar } from '@primer/react'
import { RocketIcon } from '@primer/octicons-react'

export default function Home() {
  return (
    <>
      <Header>
        <Header.Item>
         <Header.Link href="#" fontSize={2}>
            <StyledOcticon icon={RocketIcon} size={32} sx={{mr: 2}}></StyledOcticon>
            <span>CSX Labs</span>
          </Header.Link>
        </Header.Item>
        <Header.Item full>

        </Header.Item>
        <Header.Item mr={0}>
          <Avatar src="https://github.com/octocat.png" size={20} square alt="@octocat" />
        </Header.Item>
      </Header>
      <Box m={4}>
        <Heading>CSX Labs. Website under construction</Heading>
      </Box>
    </>
  )
}
