
import ResUseHeaing from './reUseComponents/ReUseHeading'
import ClientsLogo from './ClientsLogo'
import Container from './Container'
import Blackline from './Blackline'

const TrustClientSec = () => {

  let clientLogo = [
    {
      title : "Amy Smith",
      logo: '/fiverr.png'
    },
    {
      title : "Clauo Campo",
      logo: '/upwork.png'
    },
    {
      title : "Mack Wade",
      logo: '/cl3.png'
    },
    {
      title : "Stacy",
      logo: '/cl4.png'
    },
    {
      title : "Gabz Modz",
      logo: '/cl4.png'
    },
    {
      title : "Azzam Nidal",
      logo: '/cl1.png'
    },
  ]

  return (
    <div>
        <Container className="flex-col flex gap-6">
          <div className=" text-center">
          <ResUseHeaing topPara={"Visit my Client"} mainTitle={"My Trusted Client"} />
          </div>
          <div className=" flex w-full justify-center flex-wrap gap-8 ">
            {
              clientLogo.map((item,ind)=>(
                <ClientsLogo key={ind} ClientName={item.title} logo={item.logo}/>
              ))
            }
          </div>
          
        </Container>
       
          <Blackline/>  
    </div>
  )
}

export default TrustClientSec