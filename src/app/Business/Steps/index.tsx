import React from 'react'
import { BusinessStepCard } from './card'
import Image from 'next/image'

const BUSINESS_STEPS_COTENT = [
    {
        imageSource: '/image_resources/Home/clock.svg',
        title: 'THE SEARCH',
        description: 'PeepsfFish around the best candidates across the different tech stacks and and build a good relation making sure to reach out to them if we find relevant job role.'
    },
    {
        imageSource: '/image_resources/Home/dove_bird.svg',
        title: 'THE FILTRATION',
        description: 'Industry professionals. We belong to this IT industry and we understand what things are required for a particular skills. We interview the selected once and get them register to our Database.'
    },
    {
        imageSource: '/image_resources/Home/money.svg',
        title: 'THE REQUIREMENT',
        description: 'Since we belong to IT industry, we understand the requirement and find the best candidate our of our pool.'
    },
    {
        imageSource: '/image_resources/Home/money.svg',
        title: 'THE CHERRIES',
        description: 'The hand picked cherries are being passed to the client to taste and pick the sweetest onces.'
    },
    {
        imageSource: '/image_resources/Home/money.svg',
        title: 'THE REWARD',
        description: 'For our hardwork we get reward which is customer satisfaction and a small fees for our efforts.'
    }
]

export const BusinessSteps = () => {
    return (
        <div className='peeps-secondary-bg-dark flex justify-between items-between py-4'>
            {/* <div className="w-3/5 px-16 absolute opacity-50 top-20 lg:static lg:opacity-100"> */}
            <div className="w-3/5 h-inherit px-20 flex flex-col items-between justify-evenly">
                <div className='text-4xl font-bold'> Strategic Process  <br /> Stages Walkthrough. </div>
                <div className=''>
                    <Image src='/image_resources/Business/teacher.svg' alt='image' layout="responsive" height={100} width={100} />
                </div>
            </div>
            {/* </div> */}
            <div className=''>
                {
                    BUSINESS_STEPS_COTENT.map(({ imageSource, title, description }, index) => {
                        return <BusinessStepCard
                            key={index}
                            stepNumber={index + 1}
                            imageSource={imageSource}
                            title={title}
                            description={description}
                        />
                    })
                }
            </div>
        </div>
    )
}
