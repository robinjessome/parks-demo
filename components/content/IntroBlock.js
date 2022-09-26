import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import styled from 'styled-components'

const Block = styled(Parallax)``;

// const Block = styled.div``;


function IntroBlock(props) {

    return (
        <section className="pb-12">
            <Block 
                className="w-[94%] md:w-2/3 max-w-4xl bg-white shadow-lg rounded-lg mx-auto p-8 text-2xl font-serif -translate-y-10 relative z-50"
                speed={12}
            >
                {props.children}
            </Block>
        </section>

    )

}

export default IntroBlock;