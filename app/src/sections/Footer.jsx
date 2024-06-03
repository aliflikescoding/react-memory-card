import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      <a className="flex justify-center items-center text-1xl sm:text-4xl font-semibold tracking-wider" href="https://github.com/aliflikescoding" target="_">aliflikescoding <FaGithub className="ml-[5px]"/></a>
    </footer>
  )
}

export default Footer