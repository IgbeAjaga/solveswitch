import React from "react"
import { Title } from "./common/Title"
import { portfolio } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const Portfolio = () => {
  return (
    <>
      <section className='portfolio'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Some Projects Done' />
          </div>
          <div className='hero-content grid-3 py'>
            {portfolio.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
          {/*
          <div className='card links'>
            <Link href='/'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
          */}
        </div>
      </section>
    </>
  )
}

export default Portfolio
