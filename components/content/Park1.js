import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import Image from 'next/image'
import InfoPop from "./InfoPop";
import Activities from "./Activities";

function Park1(props) {

const park = props.data

// console.log(park)

/*

park.name
park.description
park.url
park.directionsInfo
park.weatherInfo

*/

const Container = styled.div`
    width: 94%;
    max-width: 1400px;
    margin: 0 auto;
`;

const bgImage = props.images[0].url + '&q=80&w=1400'

const Banner = styled(ParallaxBanner)`
height: 75vh;
& h2 {
    color: #fff;
    text-shadow: 0 8px 33px rgba(0,0,0,0.25);
    font-size: 130px;
    font-weight: 700;
    line-height: 0.9;
    text-align: center;
    margin-bottom: 150px;
    position: relative;
    text-transform: uppercase;
}
`;

let align = null;
let alignReverse = 'text-right'
let floatLeft = [-40, 0, 'easeOutBack']
let floatRight = [40, 0, 'easeOutBack']

if (props.align == 'right') {
    align = 'order-first text-right'
    alignReverse = 'order-last'
}

const accents = {
    cyan : {
        gradient : 'from-cyan-50 to-cyan-100',
        hr : 'border-cyan-300'
    },
    red : {
        gradient : 'from-red-100 to-red-50',
        hr : 'border-red-300'
    },
    rose : {
        gradient : 'from-rose-200 to-rose-50',
        hr : 'border-rose-300'
    }
}

let accentGradient, accentHr;
if (props.accent) {
    accentGradient = accents[props.accent].gradient
    accentHr = accents[props.accent].hr
}

    return (
        <section>
            <Banner
                layers={[{ image: bgImage, speed: -15 }]}
                className="pt-24 h-full"
            >
                <Parallax speed={-5}>
                    <h2 className="max-w-[1200px] mx-auto">{park.name}</h2>
                </Parallax>

                <InfoPop 
                    title={props.images[0].alt} 
                    creditUrl={props.images[0].creditUrl} 
                    creditName={props.images[0].creditName} 
                />
            </Banner>

            <div className={`pb-24 bg-gradient-to-b ${accentGradient}`}>
                <Container>
                    <div className="grid grid-cols-3 gap-8">
                    <Parallax speed={20}>
                        <div className="relative shadow-lg">                
                            <Image
                                alt={props.images[1].alt}
                                src={`${props.images[1].url}&q=90&w=400`}
                                width={400}
                                height={600}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[1].url}&q=20&w=40`}

                            />
                            <InfoPop 
                                title={props.images[1].alt} 
                                creditUrl={props.images[1].creditUrl} 
                                creditName={props.images[1].creditName} 
                            />
                        </div>
                    </Parallax>

                    <Parallax speed={10} className="">
                        <div className="relative shadow-lg">                
                            <Image
                                alt={props.images[2].alt}
                                src={`${props.images[2].url}&q=90&w=400`}
                                width={400}
                                height={600}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[2].url}&q=20&w=40`}

                            />
                            <InfoPop 
                                title={props.images[2].alt} 
                                creditUrl={props.images[2].creditUrl} 
                                creditName={props.images[2].creditName} 
                            />
                        </div>
                    </Parallax>

                    <Parallax speed={3} className={`font-serif flex items-center ${align}`}>
                        <div>
                            <p className="text-2xl mb-6">{park.description}</p>
                            <a 
                                href={park.url}
                                className="group transition text-lg"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Learn more  
                                <FontAwesomeIcon icon={faArrowRightLong} className="inline-block ml-2 group-hover:ml-3 transition-all relative top-[1px]"  />
                            </a>
                            {/* <Button url={park.url} text="Learn More" target="_blank" /> */}
                        </div>
                    </Parallax>

                    </div>
                </Container>

                <div className="grid grid-cols-2 gap-8 mt-24">
                    
                    <Parallax
                        translateX={props.align == 'right' ? floatRight : floatLeft}
                        className={`font-serif text-2xl pr-24 pl-12 flex items-center ${alignReverse}`}
                    >
                        <div>
                            <p>{props.infoType == 'weather' ? park.weatherInfo : park.directionsInfo}</p>   
                            <Activities align={props.align == 'right' ? 'left' : 'right'} data={park.activities} hrColor={accentHr} />
                        </div>
                    </Parallax>

                    <Parallax
                        translateX={props.align == 'right' ? floatLeft : floatRight}
                        >
                        <div className="relative shadow-lg">
                        <Image
                            alt={props.images[3].alt}
                            src={`${props.images[3].url}&q=90&w=800`}
                            width={800}
                            height={500}
                            layout="responsive"
                            placeholder="blur"
                            blurDataURL={`${props.images[3].url}&q=20&w=40`}

                        />
                        <InfoPop 
                            title={props.images[3].alt} 
                            creditUrl={props.images[3].creditUrl} 
                            creditName={props.images[3].creditName} 
                        />
                        </div>
                    </Parallax>
                </div>
            </div>
        </section>

    )}

export default Park1