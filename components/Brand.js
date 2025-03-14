import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"

const Brand = () => {
  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Some Of The Brands We Work With' />
          </div>
          <div className='brand-content grid-3 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='50%' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
