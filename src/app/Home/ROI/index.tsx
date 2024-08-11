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
        <div className='py-20 peeps-secondary-bg-dark px-24'>
            <div className='border-b mb-12 font-semibold'>RETURN ON INVESTMENT</div>
            <div className='flex justify-between'>
                <div className='w-2/5'>
                    <div className='text-4xl font-bold'>Maximise your ROI</div>
                    <p className='my-6'>You will save time and money with Peepsforge. Do not take it from us; take it from Forrester. Their Total Economic Impact™ (TEI) study showed a 286% return on investment over three years.</p>
                </div>
                <div className='w-2/5'>
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