import Image from 'next/image'
import React from 'react'

export const ReturnOnInvestment = () => {

    const ROI_DATA = [
        {
            source: '/image_resources/Home/hourglass.svg',
            heading: 'Improve time to value',
            description: 'Peepsforge works out of the box. Solve customer problems right away, rather than configuring complex software.'
        },
        {
            source: '/image_resources/Home/feather.svg',
            heading: 'Improve time to value',
            description: 'Peepsforge works out of the box. Solve customer problems right away, rather than configuring complex software.'
        },
        {
            source: '/image_resources/Home/money.svg',
            heading: 'Improve time to value',
            description: 'Peepsforge works out of the box. Solve customer problems right away, rather than configuring complex software.'
        }
    ]

    return (
        <div className='py-16 lg:py-20 peeps-secondary-bg-dark lg:px-24'>
            <div className='border-b mb-12 font-semibold px-10'>RETURN ON INVESTMENT</div>
            <div className='lg:flex lg:justify-between'>
                <div className='lg:w-2/5 px-10'>
                    <div className='text-3xl lg:text-4xl font-bold'>Maximise your ROI</div>
                    <p className='my-6'>You will save time and money with Peepsforge. Do not take it from us; take it from Forrester. Their Total Economic Impact™ (TEI) study showed a 286% return on investment over three years.</p>
                </div>
                <div className='lg:w-2/5 px-6'>
                    {
                        ROI_DATA.map((element, key) => {
                            return (
                                <div key={key} className='flex items-center py-10'>
                                    <Image src={element.source} alt="image" height={100} width={100} />
                                    <div className=''>
                                        <div className='text-xl font-bold mb-2'>{element.heading}</div>
                                        <div>{element.description}</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}