import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components'
import Image from 'next/image'
import InfoPop from "./InfoPop";

const MainGridImage = styled(ParallaxBanner)``

// const Block = styled(Parallax)``;

// const Block = styled.div``;


function Grid(props) {

    return (
        <section className="grid grid-rows-6 grid-cols-2 grid-flow-col">

        <div className="row-span-6">
            <MainGridImage
                    layers={[{ image: props.data[0].url+'&q=80&w=800', speed: -14 }]}
                    className="h-full"
                    >

                    <InfoPop 
                        title={props.data[0].alt} 
                        creditUrl={props.data[0].creditUrl} 
                        creditName={props.data[0].creditName} 
                    />

            </MainGridImage>
            </div>


            <div className="relative row-span-3">
                <Image
                    alt={props.data[1].alt}
                    src={`${props.data[1].url}&q=80&w=800`}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={`${props.data[1].url}&q=20&w=40`}
                />
                <InfoPop 
                    title={props.data[1].alt} 
                    creditUrl={props.data[1].creditUrl} 
                    creditName={props.data[1].creditName} 
                />
            </div>





            <div className="row-span-1 p-12 flex items-center">
                <Parallax
                translateX={[80, 0, 'easeOutBack']}
                className="font-serif text-4xl pr-24 pl-12"
                >
                    {props.children}
                </Parallax>
            </div>


            <div className="relative row-span-2 grid grid-cols-2">
                <div className="relative">
                    <Image
                        alt={props.data[2].alt}
                        src={`${props.data[2].url}&q=90&w=400`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${props.data[2].url}&q=20&w=40`}
                    />
                <InfoPop 
                    title={props.data[2].alt} 
                    creditUrl={props.data[2].creditUrl} 
                    creditName={props.data[2].creditName} 
                />
                </div>
                <div className="relative">                
                    <Image
                        alt={props.data[3].alt}
                        src={`${props.data[3].url}&q=90&w=400`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${props.data[3].url}&q=20&w=40`}
                    />
                    <InfoPop 
                        title={props.data[3].alt} 
                        creditUrl={props.data[3].creditUrl} 
                        creditName={props.data[3].creditName} 
                    />
                </div>
            </div>


        {/* <div className="h-screen">
            <ParallaxBanner
                    layers={[{ image: props.data[0].url+'&q=80&w=800', speed: -12 }]}
                    className="h-full"
                    >

                    <InfoPop 
                        title={props.data[0].alt} 
                        creditUrl={props.data[0].creditUrl} 
                        creditName={props.data[0].creditName} 
                    />

            </ParallaxBanner>
            </div>


            <div className="h-screen">


                <div className="h-[400px] relative">

                    <Image
                            alt="Mountains"
                            src={`${props.data[1].url}&q=80&w=800`}
                            layout="fill"
                            objectFit="cover"
                        />
                    <InfoPop 
                        title={props.data[1].alt} 
                        creditUrl={props.data[1].creditUrl} 
                        creditName={props.data[1].creditName} 
                    />
                </div>

                
                <div className="">
                    {props.children}
                </div>
            </div> */}

        </section>

    )

}

export default Grid;