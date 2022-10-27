import reactLogo from '../../assets/react.svg'
import ReactHookForm from '../../assets/RHF.png'
import '../../App.css'

function About() {

  return (
      <div>
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
  )
}

export default About
