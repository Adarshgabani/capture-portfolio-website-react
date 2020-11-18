import React from 'react';
//styled
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
//animation
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollRevel } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq ref={element} variants={scrollRevel} animate={controls} initial='hidden'>
            <h2>Any questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic?</p>
                    </div>

                </Toggle>
                <Toggle title='Daily Schedule'>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic?</p>

                    </div>
                </Toggle>
                <Toggle title='Diferrent Payment Methos '>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic?</p>
                    </div>

                </Toggle>
                <Toggle title='What Products Do You Offers.'>

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, hic?</p>
                    </div>

                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    .faq-line{
        background: #cccccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding:1rem 0rem;
        }
    }
`;

export default FaqSection;