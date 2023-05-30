import styled from "styled-components";
import VideoBg from "../Assets/VideoBg.mp4"

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
//import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import required modules
import { EffectCards } from "swiper";
import "swiper/css/effect-cards";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./styles.css";


const Services = ({onWhite, setOnWhite}) => {
    return(
        <div className="Services">
            <h1>Our Services</h1>
            <Cards>
                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper"
                >

                    <SwiperSlide>Service 1</SwiperSlide>
                    <SwiperSlide>Description 1</SwiperSlide>
                    <SwiperSlide>Service 1</SwiperSlide>
                    <SwiperSlide>Description 1</SwiperSlide>
                    <SwiperSlide>Service 1</SwiperSlide>
                    <SwiperSlide>Description 1</SwiperSlide>
                    
                </Swiper>

            </Cards>
            <div className="dark">
                <video className="videoBg" src={VideoBg} autoPlay loop muted></video>
            </div>
        </div>
    );
}


const Cards = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 80%;
    height: 50%;
    

`;


export default Services;