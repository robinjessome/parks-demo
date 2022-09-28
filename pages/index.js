import axios from 'axios';
import Head from 'next/head'
import Title from "../components/content/Title";
import IntroBlock from '../components/content/IntroBlock';
import Grid from "../components/content/Grid";
import Park1 from "../components/content/Park1";
import Park2 from "../components/content/Park2";
import Park3 from "../components/content/Park3";

function Home(props) {

  return (
    <div>
      <Head>
        <title>National Parks | Robin Jessome</title>
        <meta name="description" content="Scrolly National Parks thing..." />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Title data={props.bgHeroImage} />
        
        <IntroBlock>
          <p>The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations. The Park Service cooperates with partners to extend the benefits of natural and cultural resource conservation and outdoor recreation throughout this country and the world.</p>
        </IntroBlock>

        <Grid data={props.gridImages}>
          <p>Keep scrolling to explore some of the most popular National Parks!</p>
        </Grid>

        {/* Great Smoky */}
        <Park1 
          data={props.allParks.data[2]} 
          images={props.grsmImages} 
          accent="cyan"
        />

        {/* Yellowstone */}
        <Park2 
          data={props.allParks.data[5]} 
          images={props.yellImages} 
          accent="red" 
          infoType="weather"
        />

        {/* Joshua Tree */}
        <Park1 
          align="right"
          data={props.allParks.data[4]} 
          images={props.jotrImages} 
          accent="indigo" 
          infoType="weather"
        />
        
        {/* Zion */}
        <Park3 
          useFullName={true}
          data={props.allParks.data[7]} 
          images={props.zionImages} 
          accent="teal-dark" 
          infoType="weather"
        />

        {/* Grand Canyon */}
        <Park1  
          data={props.allParks.data[0]} 
          images={props.grcaImages} 
          accent="rose"
          infoType="weather"
        />

        {/* Hawaii Volcano */}
        <Park2 
          data={props.allParks.data[3]} 
          images={props.havoImages} 
          accent="stone" 
          infoType="weather"
        />

        {/* Grand Teton */}
        <Park1 
          align="right"
          data={props.allParks.data[1]} 
          images={props.grteImages} 
          accent="orange" 
          infoType=""
        />

        {/* Yosemite */}
        <Park3 
          useFullName={true}
          data={props.allParks.data[6]} 
          images={props.yoseImages} 
          accent="fuchsia" 
          infoType="weather"
        />

      </main>
    </div>
  )
}


export async function getStaticProps() {

  // PARKS

  /*


  0: grand canyon
  1: Grand Teton
  2: great smoky
  3: Hawaii Volcano
  4: Joshua Tree
  5: Yellowstone
  6: Yosemite
  7: Zion



  */

/*

Great Smokey Mountains : grsm
Zion National Park : zion
Yellowstone : yell
Grand Canyon : grca
Rockey Mountain National Park: romo
Acadia National Park : acad
Grand Teton National Park : grte
Yosemite National Park : yose
Indiana Dunes National Park : indu
Glacier National Park : glac
Joshua Tree National Park : jotr

++

Everglades National Park : ever
Hawaii Volcanoes : havo
Petrified Forest : pefo

*/

  const parksKey = '&api_key=' + process.env.PARKS_API_KEY;
  const parkIds = '?parkCode=grsm,yell,grca,jotr,havo,zion,grte,yose' // no spaces
  const parksUrl = 'https://developer.nps.gov/api/v1/parks'

  const allParks = await axios.get(parksUrl + parkIds + parksKey)
    .then(res => {
      return res.data;
    })


    // console.log(allParks)


  // IMAGES

  const unsplashKey = '?client_id=' + process.env.UNSPLASH_KEY
  const unsplashUrl = 'https://api.unsplash.com/photos/'
  // const collectionID = process.env.UNSPLASH_COLLECTION_ID

  // &q=80&w=400
  //utm_source=rj_parks&utm_medium=referral

  // HERO BANNER
  const heroBgId = 'qBbqAxyei3I'
  const fetchBgHeroImage  = await fetch(unsplashUrl + heroBgId + unsplashKey)
  const bgHeroImageData = await fetchBgHeroImage.json()

  let bgHeroImage = {
    'url': bgHeroImageData.urls.raw,
    'alt': bgHeroImageData.alt_description,
    'creditName': bgHeroImageData.user.name,
    'creditUrl': bgHeroImageData.user.links.html,
  }



/* BULK IMAGE FUNCTIONS */

async function getImage(id) {

  const imageDataJson = await axios.get(unsplashUrl + id + unsplashKey)
  .then(res => {
    return res.data;
  })

  let imageData = {
    'url': imageDataJson.urls.raw,
    'alt': imageDataJson.alt_description,
    'creditName': imageDataJson.user.name,
    'creditUrl': imageDataJson.user.links.html,
  }

  return imageData
}

async function getImages(ids) {
  const withCoords = await Promise.all(ids.map(id => getImage(id)));
  return withCoords;
}





// Grid 

  const gridImageIds = [
    'ICXB0_EV0KY', // Grand Canyon
    '9SspnXLUOLg', // Joshua Tree
    'GRaB7A1vzgA', // Yosemite
    'Ge9gn7eU054' // Yellowstone
  ]

  const gridImages = await getImages(gridImageIds).then(res => res);



// Great Smokey Images 
  const grsmImageIDs = [
    'SZbSyPX3Lsk',
    'Vpxdb9vhqIQ',
    '_yKLINiXipc',
    'S2QNERw9meM'
  ]
  const grsmImages = await getImages(grsmImageIDs).then(res => res);


// Yellowstone
  const yellImageIds = [
    'w3RPp9POocc',
    'oN3U95O4cag',
    'Wny9v0ba1Us',
    'p67k6hPMDCs'

  ]
  const yellImages = await getImages(yellImageIds).then(res => res);


// Grand Canyon
  const grcaImageIds = [
    'JEq_2UJoTtg',
    '9_x5jYJw2VQ',
    'XjDuNQr972w',
    'jVdi5C5I7QE'
  ]
  const grcaImages = await getImages(grcaImageIds).then(res => res);


// Joshua Tree
  const jotrImageIds = [
    'pa1HK9M01l4',
    'aEj8TEQHztY',
    // 'xLgqS5honO0',
    'FZlXXz5vlSs',
    '0oeFUCb9txg'
  ]
  const jotrImages = await getImages(jotrImageIds).then(res => res);


// Hawaii Volcano
  const havoImageIds = [
    'yxrXBQVwx48',
    'lZFVzfcjqKA',
    'FCN1MJDfnBg',
    '9GDa7nK_4q0'
  ]
  const havoImages = await getImages(havoImageIds).then(res => res);


// Zion
  const zionImageIds = [
    'zhUzdTgtRP8',
    'EQvF0LXnaTA',
    'aHdAdA0JzLE',
    'TdW30MbIEUs',
    'hb2nxexIy2k',
    'qp3LsH64zKY',
    'PfTNxPww6bY'

  ]
  const zionImages = await getImages(zionImageIds).then(res => res);


  // Grand Teton
  const grteImageIds = [
    'q-f4HuBlEMQ',
    'iIrjJfqSS6w',
    '02QRlYV43jY',
    'kCpCd6oQTCw',

  ]
  const grteImages = await getImages(grteImageIds).then(res => res);


// Yosemite
  const yoseImageIds = [
    'vaPoJZB9Mzg',
    'UCd78vfC8vU',
    'mPnxwQBtUZE',
    'GRaB7A1vzgA',
    'C9vbhthpgZE',
    '1Nkd3dtLpkI',
    'ubf2i8y6vys'
  ]
  const yoseImages = await getImages(yoseImageIds).then(res => res);


// Rocky mountain
  const romoImageIds = [
    'JEq_2UJoTtg',
    '9_x5jYJw2VQ',
    'XjDuNQr972w',
    'jVdi5C5I7QE'
  ]
  const romoImages = await getImages(romoImageIds).then(res => res);



// Spit it all back out to the page
  return {
    props: {
      bgHeroImage,
      gridImages,
      allParks,
      grsmImages,
      yellImages,
      grcaImages,
      jotrImages,
      havoImages,
      zionImages,
      grteImages,
      yoseImages,
      romoImages
    },
  }

}


export default Home