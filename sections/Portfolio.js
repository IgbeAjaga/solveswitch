import { portfolio } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Portfolio = () => {
  return (
    <>
      <section className='portfolio bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SOME OF THE WORKS WE HAVE DONE' /> <br />
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {portfolio.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className='py btn'>
            <button className='secondary-button'>View More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
