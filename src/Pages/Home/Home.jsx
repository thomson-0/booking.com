import NavBar from '../../components/Navbar/NavBar'
import Header from '../../components/header/Header'
import Feature from '../../components/featured/Feature'
import './home.css'
import PropertyList from '../../components/propertylist/PropertyList'
import Featureprope from '../../components/fearureproperties/Featureprope'
import Maillist from '../../components/maillist/Maillist'
import Footer from '../../components/footer/Footer'



function Home() {
  return (
    <div>
        <NavBar/>
       <Header/>
       <div className="h-container">
       <Feature/>
       </div>
       <div className="head2-container">
       <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList/>
      <h1 className="homeTitle">Homes guests love</h1>
      <Featureprope/>
      <Maillist/>
      <Footer/>
       </div>
    </div>
  )
}

export default Home