import { Element } from 'react-scroll';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Portfolio = () => {
    return (
        <section className=" my-36">
            <Element name="portfolio">
                <div className="container-full">
                    <div className=" flex items-center">
                        <img src="/images/advantage.png" alt="Icon" />
                        <h3 className=" ml-5 h3">Портфолио</h3>
                    </div>
                </div>
                <div className="container-full-l">
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide>
                            <img src="image1.jpg" alt="Image 1" />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="image2.jpg" alt="Image 2" />
                        </SplideSlide>
                    </Splide>
                </div>
            </Element>
        </section>
    );
};

export default Portfolio;
