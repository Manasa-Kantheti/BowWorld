import React from 'react'
import './home.css'
import HomeImg from '../assets/main.png'
import ChooseCard from './ChooseCard'
import Explore from './Explore'
import HomePageBreed from './HomePageBreed'
import { Link } from 'react-router-dom'
// import HomeImg from '../assets/Dog 1.jpg'

export const Home = () => {
    return (
        <div>
            <div className="product-home">
                <div className="homepage">
                    <div className="homepage-intro">
                        <div className="homepage-text">
                            <h1>Welcome to BowWorld!</h1>
                            <p>Discover the amazing world of dog breeds and find your perfect furry companion. Whether you're a first-time
                                dog owner or a seasoned pet lover, we've got all the information you need to make an informed decision when
                                choosing your new best friend.</p>
                        </div>
                        <div>
                            <Link to={'/breeds'} className='btn-home btn-more c-pointer'>Explore</Link>
                        </div>
                    </div>
                    <div>
                        <img src={HomeImg} alt="Home" />
                    </div>
                </div>
            </div>
            <HomePageBreed />
            <ChooseCard chooseCardData={[
                {
                    title: '1',
                    subTitle: 'Comprehensive Information:',
                    desc: `Our web app provides detailed and accurate information about
                           each dog breed, including size, temperament, exercise needs, grooming requirements, and common health
                           issues.`
                },
                {
                    title: '2',
                    subTitle: 'Visual Delight:',
                    desc: `Immerse yourself in the captivating world of dogs with our stunning,
                           high-quality breed images that showcase the beauty and diversity of each canine companion.`
                },
                {
                    title: '3',
                    subTitle: 'User Reviews:',
                    desc: `Get insights from fellow dog lovers through user-generated reviews and
                           ratings, helping you make informed decisions about potential breeds based on real experiences.`
                },
                {
                    title: '4',
                    subTitle: 'Expert Advice:',
                    desc: `Our team of dog experts is here to assist you with any queries or concerns
                           you may have during your journey to finding the perfect dog breed.`
                },
                {
                    title: '5',
                    subTitle: 'Responsible Pet Ownership:',
                    desc: `We promote responsible pet ownership and encourage our users
                           to consider adoption, rescue, and ethical breeding practices.`
                }
            ]} />
            <Explore />
        </div>
    )
}
