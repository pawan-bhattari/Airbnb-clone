import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card'

function Home() {
    return (
        <div className="home">
            {/* inside the Home there are two element Search  banner */}
         <Banner/>
         <div className='home__section'>
            <Card
                src = "https://i.pinimg.com/474x/13/2c/33/132c335d1dfb8c449537f4f65e79ac2d.jpg"
                title="Enjoy Bagan city"
                description="Once a year go someplace you have never been before"
            />
            <Card
                src="https://i.pinimg.com/474x/e0/33/ba/e033ba202cb9317a873c3acb1c3815ca.jpg"
                title="Mandalay"
                description="Where ever you go go with all your heard"
            />
            <Card
                src="https://i.pinimg.com/474x/85/33/cf/8533cf0978eab470fc63508a09700b19.jpg"
                title="Yangon"
                description="There are no foreign land. It is the traveler only who is foreign"
             />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£13/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Yangon"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£35/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
            </div>
        </div>
    )
}

export default Home
