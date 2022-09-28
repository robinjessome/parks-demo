import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components'
import Image from 'next/image'
import { accents } from "../../constants/global";
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
    margin-left: auto;
    margin-right: auto;
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

let align = 'text-center lg:text-left';
let alignReverse = 'text-right'
let floatLeft = [-20, 0, 'easeOutBack']
let floatRight = [20, 0, 'easeOutBack']

if (props.align == 'right') {
    align = 'order-first text-center lg:text-right'
    alignReverse = 'order-last'
}

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
                className="pt-32 h-full"
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

            <div className={`pb-24 bg-gradient-to-b ${accentGradient}`}>
                <Container>
                    <div className="md:grid grid-cols-2 xl:grid-cols-3 gap-8">
                    <Parallax speed={20}>
                        <div className="relative shadow-lg">                
                            <Image
                                alt={props.images[1].alt}
                                src={`${props.images[1].url}&q=90&w=400&h=600&fit=crop`}
                                width={400}
                                height={600}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[1].url}&q=20&w=40&h=60&fit=crop`}

                            />
                            <InfoPop 
                                title={props.images[1].alt} 
                                creditUrl={props.images[1].creditUrl} 
                                creditName={props.images[1].creditName} 
                            />
                        </div>
                    </Parallax>

                    <Parallax speed={10} className="hidden xl:block">
                        <div className="relative shadow-lg">                
                            <Image
                                alt={props.images[2].alt}
                                src={`${props.images[2].url}&q=90&w=400&h=600&fit=crop`}
                                width={400}
                                height={600}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[2].url}&q=20&w=40&h=60&fit=crop`}

                            />
                            <InfoPop 
                                title={props.images[2].alt} 
                                creditUrl={props.images[2].creditUrl} 
                                creditName={props.images[2].creditName} 
                            />
                        </div>
                    </Parallax>

                    <Parallax speed={3} className={`font-serif flex items-center ${align} ${textColor}`}>
                        <div>
                            <p className="text-xl md:text-2xl mb-6">{park.description.replace('Daily updates >', '')}</p>
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

                <div className="hidden md:grid grid-cols-2 gap-8 mt-24">
                    
                    <Parallax
                        translateX={props.align == 'right' ? floatRight : floatLeft}
                        className={`font-serif text-2xl pr-24 pl-12 flex items-center ${alignReverse} ${textColor}`}
                    >
                        <div>
                            <p>{props.infoType == 'weather' ? park.weatherInfo : park.directionsInfo}</p>   
                            <Activities 
                                align={props.align == 'right' ? 'left' : 'right'} 
                                data={park.activities} 
                                hrColor={accentHr} 
                                textColor={textColor}
                            />
                        </div>
                    </Parallax>

                    <Parallax
                        translateX={props.align == 'right' ? floatLeft : floatRight}
                        >
                        <div className="relative shadow-lg">
                        <div className="hidden lg:block">
                            <Image
                                alt={props.images[3].alt}
                                src={`${props.images[3].url}&q=90&w=800&h=500&fit=crop`}
                                width={800}
                                height={500}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[3].url}&q=20&w=80&h=50&fit=crop`}
                            />
                        </div>
                        <div className="block lg:hidden">
                            <Image
                                alt={props.images[3].alt}
                                src={`${props.images[3].url}&q=90&w=400&h=600&fit=crop`}
                                width={400}
                                height={600}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[3].url}&q=20&w=30&h=60&fit=crop`}
                            />
                        </div>
                        <InfoPop 
                            title={props.images[3].alt} 
                            creditUrl={props.images[3].creditUrl} 
                            creditName={props.images[3].creditName} 
                        />
                        </div>
                    </Parallax>
                </div>

                <Container className={`mt-16 font-serif text-xl block md:hidden ${align} ${textColor}`}>

                <div className="relative shadow-lg mb-16">

                            <Image
                                alt={props.images[3].alt}
                                src={`${props.images[3].url}&q=90&w=800&h=800&fit=crop`}
                                width={800}
                                height={800}
                                layout="responsive"
                                placeholder="blur"
                                blurDataURL={`${props.images[3].url}&q=20&w=40&h=40&fit=crop`}
                            />
   
                        <InfoPop 
                            title={props.images[3].alt} 
                            creditUrl={props.images[3].creditUrl} 
                            creditName={props.images[3].creditName} 
                        />
                    </div>


                    <p>{props.infoType == 'weather' ? park.weatherInfo : park.directionsInfo}</p>   
                    <Activities 
                        align={props.align == 'right' ? 'left' : 'right'} 
                        data={park.activities} 
                        hrColor={accentHr} 
                        textColor={textColor}
                    />
                </Container>


            </div>
        </section>

    )}

export default Park1