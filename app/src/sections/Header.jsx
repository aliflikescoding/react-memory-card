const Header = () => {
  return (
    <header className="flex justify-center items-center">
      <div className="flex items-center">
        <h1 className="font-montserrat text-1xl sm:text-4xl font-semibold tracking-widest"><span className="text-primary">Movie</span> Memory Card</h1>
        <img src="../assets/logo.png" alt="movie memory card logo" className="ml-1 sm:ml-3 w-[40px] h-[40px] sm:w-[65px] sm:h-[65px]"/>
      </div>
    </header>
  )
}

export default Header