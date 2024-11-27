import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex items-center justify-between w-full gap-10 max-lg:flex-col max-container">
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-bold capitalize font-palanquin lg:max-w-lg">
        We Deliver the  <span className="text-coral-red">Freshest, </span> <span className="text-coral-red">Premium-Quality </span> Fish
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">Carefully sourced for exceptional taste and freshness, our seafood is perfect for every dish. Experience unmatched quality, sustainability, and a touch of culinary excellence.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our commitment to quality and freshness ensures your satisfaction.</p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex items-center justify-center flex-1">
        <img src={bigShoe1} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  )
}

export default SuperQuality;