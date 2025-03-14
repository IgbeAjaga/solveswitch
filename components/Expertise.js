import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Expertise' />
            <p>We craft innovative digital solutions, combining technology and strategy to elevate your brand.</p>
          </div>
          <div className='hero-content grid-4'>
  {expertise.map((item) => (
    <Card data={item} key={item.id} caption='Learn More' />
  ))}
</div>


        </div>
      </section>
    </>
  )
}

export default Expertise
