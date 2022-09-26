import Head from 'next/head'
import Title from "../components/content/Title";
import FloatingBlock from '../components/content/FloatingBlock';
// import { useParallax } from 'react-scroll-parallax';

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
        <FloatingBlock>
            <p>The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations. The Park Service cooperates with partners to extend the benefits of natural and cultural resource conservation and outdoor recreation throughout this country and the world.</p>
          </FloatingBlock>

      <div className="h-[2000px] bg-slate-500"></div>
      </main>
    </div>
  )
}


export async function getStaticProps() {

  // IMAGES

  const unsplashKey = '?client_id=' + process.env.UNSPLASH_KEY
  // const collectionID = process.env.UNSPLASH_COLLECTION_ID

  // &q=80&w=400
  //utm_source=rj_parks&utm_medium=referral

  // HERO BANNER
  const heroBgId = 'qBbqAxyei3I'
  const fetchBgHeroImage  = await fetch('https://api.unsplash.com/photos/' + heroBgId + unsplashKey)
  const bgHeroImageData = await fetchBgHeroImage.json()

  let bgHeroImage = {
    'url': bgHeroImageData.urls.raw,
    'alt': bgHeroImageData.alt_description,
    'creditName': bgHeroImageData.user.name,
    'creditUrl': bgHeroImageData.user.links.html,
  }
  
  console.log(bgHeroImageData)


  // ?client_id=YOUR_ACCESS_KEY
  // https://api.unsplash.com/photos/:id
  // https://api.unsplash.com/collections/:id/photos

  // const res  = await fetch('https://api.unsplash.com/collections/' + collectionID + '/photos' + unsplashKey)
  // const images = await res.json()

  // console.log(images[0].urls.regular)

  return {
    props: {
      bgHeroImage,
      // images
    },
  }

}


export default Home