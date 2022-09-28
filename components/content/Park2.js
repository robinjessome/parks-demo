import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import Image from 'next/image'
import { accents } from "../../constants/global";
import InfoPop from "./InfoPop";
import Activities from "./Activities";

function Park2(props) {

const park = props.data

// console.log(park)

// console.log(props.images[1].url);

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
        font-weight: 700;
        line-height: 0.9;
        text-align: center;
        margin-bottom: 150px;
        position: relative;
        text-transform: uppercase;
    }
`;

let accentGradient, accentHr, textColor, activityText;
if (props.accent) {
    accentGradient = accents[props.accent].gradient
    accentHr = accents[props.accent].hr
    textColor = accents[props.accent].textColor
}

    return (
        <section>
            <Banner
                layers={[{ image: bgImage, speed: -15 }]}
                className="pt-24 h-full"
            >
                <Parallax speed={-5}>
                    <h2 className="text-6xl md:text-[100px] lg:text-[130px] max-w-[1200px] px-6 mx-auto">
                        {props.useFullName ? park.fullName : park.name}
                    </h2>
                </Parallax>
                <InfoPop 
                    title={props.images[0].alt} 
                    creditUrl={props.images[0].creditUrl} 
                    creditName={props.images[0].creditName} 
                />
            </Banner>

            <div className={`py-16 bg-gradient-to-b ${accentGradient} ${textColor}`}>
                <Container>
                    <div className="font-serif max-w-4xl mx-auto text-center">
                        <p className="text-2xl mb-6">{park.description}</p>
                        <p> <a 
                                href={park.url}
                                className="group transition text-lg"
                                target="_blank" 
                                rel="noreferrer"
                            >
                                Learn more  
                                <FontAwesomeIcon icon={faArrowRightLong} className="inline-block ml-2 group-hover:ml-3 transition-all relative top-[1px]"  />
                            </a>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mt-16">
                    
                        <Parallax
                            translateX={[-30, -5, 'easeOutBack']}
                            className=""
                        >
                            <div className="relative shadow-lg">                
                                <Image
                                    alt={props.images[1].alt}
                                    src={`${props.images[1].url}&q=90&w=600&h=400&fit=crop`}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                    placeholder="blur"
                                    blurDataURL={`${props.images[1].url}&q=20&w=60&h=40&fit=crop`}

                                />
                                <InfoPop 
                                    title={props.images[1].alt} 
                                    creditUrl={props.images[1].creditUrl} 
                                    creditName={props.images[1].creditName} 
                                />
                            </div>
                        </Parallax>

                        <Parallax
                            translateX={[30, 5, 'easeOutBack']}
                        >
                            <div className="relative shadow-lg">                
                                <Image
                                    alt={props.images[2].alt}
                                    src={`${props.images[2].url}&q=90&w=600&h=400&fit=crop`}
                                    width={600}
                                    height={400}
                                    layout="responsive"
                                    placeholder="blur"
                                    blurDataURL={`${props.images[2].url}&q=20&w=60&h=40&fit=crop`}

                                />
                                <InfoPop 
                                    title={props.images[2].alt} 
                                    creditUrl={props.images[2].creditUrl} 
                                    creditName={props.images[2].creditName} 
                                />
                            </div>
                        </Parallax>

                    </div>

                    <div className="mt-24 font-serif max-w-4xl mx-auto text-center">
                        <p className="text-2xl mb-6">
                            {props.infoType == 'weather' ? park.weatherInfo : park.directionsInfo}
                        </p>

                        <div>
                            <Activities 
                                align="center" 
                                data={park.activities} 
                                hrColor={accentHr} 
                                textColor={textColor}
                            />
                        </div>

                        <Parallax speed={8} className="mt-12 shadow-lg">
                        <Image
                                    alt={props.images[3].alt}
                                    src={`${props.images[3].url}&q=90&w=900&h=600&fit=crop`}
                                    width={900}
                                    height={600}
                                    layout="responsive"
                                    placeholder="blur"
                                    blurDataURL={`${props.images[3].url}&q=20&w=90&h=60&fit=crop`}

                                />
                                <InfoPop 
                                    title={props.images[3].alt} 
                                    creditUrl={props.images[3].creditUrl} 
                                    creditName={props.images[3].creditName} 
                                />
                        </Parallax>

                    </div>

                </Container>

                {/* <div className="grid grid-cols-2 gap-8 mt-24">
                    
                    <Parallax
                        translateX={[-80, 0, 'easeOutBack']}
                        className="font-serif text-2xl pr-24 pl-12 flex items-center text-right"
                    >
                        <div>
                            <p>{park.weatherInfo}</p>   
                            <Activities data={park.activities} hrColor='border-red-200' />
                        </div>
                    </Parallax>

                    <Parallax
                        translateX={[80, 0, 'easeOutBack']}
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
                </div> */}
            </div>
        </section>

    )}

export default Park2