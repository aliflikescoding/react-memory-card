import Header from "./sections/Header";
import Footer from "./sections/Footer";
import MainArea from "./sections/MainArea";

function App() {
  return (
    <>
      <main className="relative bg-background text-text">
        <section className="padding-x sm:py-[30px] py-[20px]">
          <Header />
        </section>
        <section className="padding-x">
          <MainArea />
        </section>
        <section className="padding-x">
          <Footer />
        </section>
      </main>
    </>
  )
}

export default App
