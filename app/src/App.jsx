import Header from "./sections/Header";

function App() {
  return (
    <>
      <main className="relative bg-background text-text font-opensans">
        <section className="padding-x sm:py-[30px] py-[20px]">
          <Header />
        </section>
        <section className="padding-x">
          Main Area
        </section>
        <section className="padding-x">
          Footer
        </section>
      </main>
    </>
  )
}

export default App
