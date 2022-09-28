import axios from 'axios';
import Head from 'next/head'
import Title from "../components/content/Title";
import IntroBlock from '../components/content/IntroBlock';
import Grid from "../components/content/Grid";
import Park1 from "../components/content/Park1";
import Park2 from "../components/content/Park2";

function Home(props) {




  return (
    <div>
      <Head>
        <title>National Parks</title>
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

        <Park1 
          data={props.allParks.data[1]} 
          images={props.grsmImages} 
          accent="cyan"
        />

        <Park2 
          data={props.allParks.data[2]} 
          images={props.yellImages} 
          accent="red" 
          infoType="weather"
        />

        <Park1 
          align="right" 
          data={props.allParks.data[0]} 
          images={props.grcaImages} 
          accent="rose"
          infoType="weather"
        />



      <div className="h-[2000px]"></div>
      </main>
    </div>
  )
}


export async function getStaticProps() {

  // PARKS

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
  const parkIds = '?parkCode=grsm,yell,grca'
  const parksUrl = 'https://developer.nps.gov/api/v1/parks'

  const allParks = await axios.get(parksUrl + parkIds + parksKey)
    .then(res => {
      return res.data;
    })




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

  // return axios.get(
  //   `${baseUrl}?app_id=${hereAppId}&app_code=${hereAppCode}&searchtext=${name}`
  // );
  return imageData
}

async function getImages(ids) {
  const withCoords = await Promise.all(ids.map(id => getImage(id)));
  console.log('in async function');
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


  const yellImageIds = [
    'w3RPp9POocc',
    'oN3U95O4cag',
    'Wny9v0ba1Us',
    'gp2QLJKOvVc'

  ]

  const yellImages = await getImages(yellImageIds).then(res => res);


  const grcaImageIds = [
    'JEq_2UJoTtg',
    'oN3U95O4cag',
    'Wny9v0ba1Us',
    'gp2QLJKOvVc'
  ]

  const grcaImages = await getImages(grcaImageIds).then(res => res);


// Spit it all back out to the page
  return {
    props: {
      bgHeroImage,
      gridImages,
      allParks,
      grsmImages,
      yellImages,
      grcaImages
    },
  }

}


export default Home