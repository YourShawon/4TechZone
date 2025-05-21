import React from 'react'
import Container from './container'
import Items from './Items'
import Branding from '../../public/Branding'
import Market from '../../public/Market'
import Content from '../../public/Content'
import ECommerce from '../../public/ECommerce'
import Competitor from '../../public/Competitor'
import Seo from '../../public/Seo'

import Bramding from  "../../public/image.png"


const CompleteItems = [
  {
    id: 1,
    name: "Branding Services",
    description: "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Bramding,
  },
  {
    id: 2,
    name: "Market Research",
    description: "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Bramding,
  },
  {
    id: 3,
    name: "Content Creation",
    description: "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Bramding,
  },
  {
    id: 4,
    name: "e-Commerce Solutions",
    description: "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Bramding,
  },
  {
    id: 5,
    name: "Competitor Analysis",
    description: "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Bramding,
  },
  {
    id: 6,
    name: "SEO & SMM Services",
    description: "Porta semper lacus cursus feugiat a primis ligula ultrice risus an auctor tempus feugiat diam turpis impedit auctor felis and augue mauris blandit",
    icon: Bramding,
  },
  
]

const FeaturesSection = () => {
  return (
    <section>
        <Container>
        <h2 className='lg:text-[60px] font-jakarta-sans font-bold md:text-[32px] sm:text-[26px] text-center'>The Complete Solutions</h2>
        <p className='text-center pt-[22px] text-[22px] pb-[80px]'>Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-[30px] justify-center'>
         {
          CompleteItems?.map((CompItmes)=>{
            return <Items key={CompItmes.id} CompItmes={CompItmes}/>
        }) 

          
        }
      
        </div>
        </Container>
    </section>
  )
}

export default FeaturesSection