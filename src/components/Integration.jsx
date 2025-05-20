
import React from 'react'
import Container from './container'
import IntegrationItems from './IntegrationItems'
import  zapier from "../../public/integration-image/zapier.png"
import  discord from "../../public/integration-image/discord.png"
import  firebase from "../../public/integration-image/firebase.png"
import  hubspot from "../../public/integration-image/hubspot.png"
import  intercom from "../../public/integration-image/intercom.png"
import  mailchimp from "../../public/integration-image/mailchimp.png"
import  notion from "../../public/integration-image/notion.png"
import  shopify from "../../public/integration-image/shopify.png"
import  slack from "../../public/integration-image/slack.png"
import  trello from "../../public/integration-image/trello.png"
import  zendeskDark from "../../public/integration-image/zendesk.png"
import  zoom from "../../public/integration-image/zoom.png"

const integrationArray = [
  {
    id : 1, 
  name: "Zapier",
  image : zapier,
  },
  {
    id :2, 
  name: "Discord",
  image : discord,
  },
  {
    id: 3, 
  name: "Firebase",
  image : firebase,
  },
  {
    id: 4, 
  name: "Hubspot",
  image : hubspot,
  },
  {
    id : 5, 
  name : "Intercom",
  image  : intercom,
  },
  {
    id : 6, 
  name : "Mailchimp",
  image  : mailchimp,
  },
  {
    id : 7, 
  name : "Notion",
  image  : notion,
  },
  {
    id : 8, 
  name : "Shopify",
  image  : shopify,
  },
  {
    id : 9, 
  name : "Slack",
  image  : slack,
  },
  {
    id : 10, 
  name : "Trello",
  image  : trello,
  },
  {
  id : 11, 
  name : "Zendesk",
  image  : zendeskDark,
  },
  {
    id : 12, 
  name : "Zoom",
  image  : zoom,
  },
]

const Integration = () => {
  return (
    <Container>
        <div className='pb-[70px] pt-[100px] max-w-[800px] mx-auto text-center'>
            <h2 className='md:text-[40px] lg:text-[50px] xl:text-[60px] text-[32px] text-center font-bold  lg:leading-[75px]'>Seamless integration with all your essential tools</h2>
            <p className='pt-[22px] md:text-xl text-[16px] text-center text-[#6c757d]'>Ligula risus auctor tempus magna feugiat lacinia fusce blandit</p>
        </div>
        <div className='grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2   gap-[30px] justify-center'>
        {
          integrationArray?.map((Intragrationparts) => {
            return <IntegrationItems key={Intragrationparts.id} Intragrationparts={Intragrationparts}/>
            })
        }
        </div>
        <div className=''>
          <div className='mt-[30px] w-[240px] mx-auto'>
             <button className='text-[#000] font-[600] text-[16px]  px-[31px] py-[15px] borderpart '>View All Integrations</button>
          </div>
        </div>
    </Container>
  )
}

export default Integration