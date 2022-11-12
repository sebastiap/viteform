import reactLogo from '../../assets/react.svg'
import ReactHookForm from '../../assets/RHF.png'
import '../../App.css'
import { Heading,List,  ListIcon, ListItem } from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'

function About() {

  return (
    <>
      <Heading  mb={4}>Vite + React</Heading>
      <p>
          This Project is about using React with tools i never used before.
      </p>
      <p>
       This time i used Vite instead of Create React App.
       </p>
       <p>
       The main purpose of this project is to try and understand a new set of tools and libraries.
       </p>
      <div className="logodiv">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={ReactHookForm} className="logo react" alt="React Hook Form logo" />
        </a>
      </div>
      <Heading  mt={2} mb={4}> Tools and Libraries in this project</Heading>
      <List spacing={5}>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Vite - For creating the project ✔️
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            React Hook Form - For creating a custom Form ✔️
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Styled Component Library - For creating styles in a different way ✔️
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Axios - To practice with API calls ✔️ 
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            ChakraUI - Trying a new CSS component library ✔️
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Jest - For a popular test framework ✔️
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Higher Order Components ✔️
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color='green.500' />
            Custom Hook - useDataApi that can be used in future projects ✔️
          </ListItem>

          
        </List>
      
      </>
  )
}

export default About
