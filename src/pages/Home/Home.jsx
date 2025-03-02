import { useState } from 'react'
import Exploremenu from '../../components/Navbar/ExploreMenu/Exploremenu'
import Header from '../../components/Navbar/Header/Header'
import './Home.css'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All");
  
  return (
    <div>
  <Header/>
  <Exploremenu category={category} setCategory={setCategory}/>
  <FoodDisplay category={category}/>
  <AppDownload/>
    </div>
  )
}

export default Home
