import Nav from "./components/Nav";
import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer,Floating } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <Services />
      </section>
      
      
      <section className="w-full py-16 padding-x sm:py-32">
        <Subscribe />
      </section>
      <section className="pb-8 bg-black padding-x padding-t">
        <Footer />
      </section>

      <section>
      <Floating/>
      </section>
    </main>
  )
}

export default App;