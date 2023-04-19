import "./home.scss"
// import Header from './../../components/header/Header'
import Banner from './../../components/banner/Banner'
import Rentals from './../../components/rentals/Rentals'
// import Footer from './../../components/footer/Footer'


function Home(){
    
    
    return(
        <main className="home">
         
        <Banner/>   
        <Rentals/>   
        
        </main>
       
    )
}

export default Home