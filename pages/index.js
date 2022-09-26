import Head from 'next/head'
import Title from "../components/content/Title";
import IntroBlock from '../components/content/IntroBlock';
import Grid from "../components/content/Grid";
import GreatSmokey from "../components/content/GreatSmokey";

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

        <GreatSmokey />



      <div className="h-[2000px] bg-slate-500"></div>
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
  const parkIds = '?parkCode=grsm,zion'
  const parksUrl = 'https://developer.nps.gov/api/v1/parks'

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    

  const fetchParks  = await fetch(parksUrl + parkIds + parksKey, {
    headers: {'Content-Type': 'application/json', }
  })
  const parksData = await fetchParks.text()

  console.log(parksUrl + parkIds + parksKey)
  console.log(fetchParks.status)
  console.log(parksData)

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

  // Grid 

  let gridImages = [];

  // grand canyon  
  const gridImage1Id = 'ICXB0_EV0KY'
  
  const fetchGridImage1  = await fetch(unsplashUrl + gridImage1Id + unsplashKey);
  const gridImage1Data = await fetchGridImage1.json()

  let gridImage1 = {
    'url': gridImage1Data.urls.raw,
    'alt': gridImage1Data.alt_description,
    'creditName': gridImage1Data.user.name,
    'creditUrl': gridImage1Data.user.links.html,
  }
  gridImages.push(gridImage1);


// Josua Tree
  const gridImage2Id = '9SspnXLUOLg'
  
  const fetchGridImage2  = await fetch(unsplashUrl + gridImage2Id + unsplashKey);
  const gridImage2Data = await fetchGridImage2.json()

  let gridImage2 = {
    'url': gridImage2Data.urls.raw,
    'alt': gridImage2Data.alt_description,
    'creditName': gridImage2Data.user.name,
    'creditUrl': gridImage2Data.user.links.html,
  }
  gridImages.push(gridImage2);


// Yosemite
  const gridImage3Id = 'GRaB7A1vzgA'
  
  const fetchGridImage3  = await fetch(unsplashUrl + gridImage3Id + unsplashKey);
  const gridImage3Data = await fetchGridImage3.json()

  let gridImage3 = {
    'url': gridImage3Data.urls.raw,
    'alt': gridImage3Data.alt_description,
    'creditName': gridImage3Data.user.name,
    'creditUrl': gridImage3Data.user.links.html,
  }
  gridImages.push(gridImage3);


  // Yellowstone
  const gridImage4Id = 'Ge9gn7eU054'
  
  const fetchGridImage4  = await fetch(unsplashUrl + gridImage4Id + unsplashKey);
  const gridImage4Data = await fetchGridImage4.json()

  let gridImage4 = {
    'url': gridImage4Data.urls.raw,
    'alt': gridImage4Data.alt_description,
    'creditName': gridImage4Data.user.name,
    'creditUrl': gridImage4Data.user.links.html,
  }
  gridImages.push(gridImage4);

  

  // ?client_id=YOUR_ACCESS_KEY
  // https://api.unsplash.com/photos/:id
  // https://api.unsplash.com/collections/:id/photos

  // const res  = await fetch('https://api.unsplash.com/collections/' + collectionID + '/photos' + unsplashKey)
  // const images = await res.json()

  // console.log(images[0].urls.regular)

  return {
    props: {
      bgHeroImage,
      gridImages,
      // images
    },
  }

}


export default Home