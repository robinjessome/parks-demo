import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components'

const Block = styled(Parallax)``;

function IntroBlock(props) {
    return (
        <section className="pb-12">
            <Block 
                className=" text-center md:text-left w-[94%] md:w-2/3 max-w-4xl bg-white shadow-lg rounded-lg mx-auto p-8 text-xl lg:text-2xl font-serif -translate-y-10 relative z-50"
                speed={12}
            >
                {props.children}
            </Block>
        </section>
    )
}

export default IntroBlock;