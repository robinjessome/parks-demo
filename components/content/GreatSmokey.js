import { useState } from 'react';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import styled from 'styled-components'
import Image from 'next/image'
import InfoPop from "./InfoPop";
import Button from "./Button";

function GreatSmokey(props) {

const park = props.data

// console.log(park)

const Container = styled.div`
    width: 94%;
    max-width: 1400px;
    margin: 0 auto;
`;

const bgImage = props.images[0].url + '&q=80&w=1400'

const Banner = styled(ParallaxBanner)`
height: 66vh;
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

    return (
        <section>
            <Banner
                layers={[{ image: bgImage, speed: -15 }]}
                className="pt-16 h-full"
            >
                <Parallax speed={-5}>
                    <h2>{park.name}</h2>
                </Parallax>
            </Banner>

            <Container>
                <div class="grid grid-cols-3 gap-8">
                <Parallax speed={-14}>
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

                <Parallax speed={-8} className="">
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

                <Parallax speed={-2} className="font-serif flex items-center">
                    <div>
                        <p className="text-2xl mb-6">{park.description}</p>
                        <a 
                            href={park.url}
                            className="group text-teal-700 hover:text-teal-900 transition text-lg"
                            target="_blank" 
                            rel="noreferrer"
                        >
                            Learn more  
                            <ArrowLongRightIcon className="w-5 h-5 inline-block ml-2 relative top-[-2px] group-hover:ml-3 transition-all" />
                        </a>
                        {/* <Button url={park.url} text="Learn More" target="_blank" /> */}
                    </div>
                </Parallax>

                </div>


            </Container>

            {/* <div class="max-w-6xl mx-auto">

                <Parallax speed={0}>
                    <div className="shadow-lg inline">
                    <Image
                        alt={props.images[1].alt} 
                        src={`${props.images[1].url}&q=80&w=500`}
                        // width={400}
                        // height={600}
                        layout="fill"
                    />
                    <InfoPop 
                        title={props.images[1].alt} 
                        creditUrl={props.images[1].creditUrl} 
                        creditName={props.images[1].creditName} 
                    />
                    </div>
                </Parallax>

            </div> */}
        </section>

    )}

export default GreatSmokey