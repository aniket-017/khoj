import React from 'react'
import './Home.css'
import Banner from "./Banner"
import Card from "./Card"
import H1 from './Image/H1.png'
import H2 from './Image/H2.jpg'
import H3 from './Image/H3.jpg'
import { useNavigate } from "react-router-dom";
import information from './Information'
import { Grid } from '@material-ui/core/'







function createcard(information){
  return <Card src={information.src}
      title = {information.title}
      description = {information.description}
      price = {information.price}
  />  
}
function Home() {
  const navigate = useNavigate();
  return (
    <div className ='home'>
      
      <Banner />

      <div className='home_section'>
      <Grid
              container
              spacing={2}
              direction="row"
              justify="flex-start"
              width="10px"
              alignItems="flex-start"
          >
              {information.map(elem => (
                  <Grid item xs={12} sm={6} md={4} key={information.indexOf(elem)}>
                    <Card src={elem.src}
                        title = {elem.title}
                        description = {elem.description}
                        price = {elem.price}
                    />  
                  </Grid>
              ))}


          </Grid>
          </div>
      <div className='home_section'>
      {information.map(createcard)}
      </div>
      
      <div className='home_section'>
      
        <Card src={information[0].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[0].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[0].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[0].src} title={information[0].title} description={information[0].description} price={information[0].price} />
      </div>
      <div className='home_section'>
        <Card src={information[1].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[1].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[1].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[1].src} title={information[0].title} description={information[0].description} price={information[0].price} />
      </div>
      <div className='home_section'>
        <Card src={information[2].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[2].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[2].src} title={information[0].title} description={information[0].description} price={information[0].price} />
        <Card src={information[2].src} title={information[0].title} description={information[0].description} price={information[0].price} />
      </div>
    </div>
  )
}

export default Home