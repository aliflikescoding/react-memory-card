import Button from "../Components/Button"
import { FaPlayCircle } from "react-icons/fa";
import InfoModal from "../Components/InfoModal";

const MainArea = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[89vh] sm:h-[79.7vh] overflow-y-auto font-bold">
      <h1 className="text-6xl my-8">Play Now!</h1>
      <Button label="Begin " iconComponent={<FaPlayCircle />}/>
      <InfoModal />
    </div>
  )
}

export default MainArea