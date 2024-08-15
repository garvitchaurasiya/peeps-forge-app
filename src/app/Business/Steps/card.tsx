import Image from 'next/image';
import React from 'react'

export const BusinessStepCard = ({ stepNumber, title, description, imageSource }: { stepNumber: number; title: string; description: string; imageSource: string }) => {

    let cardsRelativeMargin = {
        1: 150,
        2: 80,
        3: 50,
        4: 80,
        5: 150
    }

    return (
        <div className={` w-fit relative py-4`} style={{ right: `${cardsRelativeMargin[stepNumber as keyof typeof cardsRelativeMargin]}px` }}>
            <div style={{ 'backgroundColor': '#c6b7e0' }} className='h-16 w-16 rounded-full absolute bottom-28 right-8 flex justify-center items-center font-bold'> {'0' + stepNumber} </div>

            <div className='bg-white rounded-lg h-36 w-96 flex items-center'>
                <div className=''><Image src={imageSource} alt='image' width={100} height={100} /></div>

                <div className='w-2/3 z-10'>
                    <div className='text-md font-bold'>{title}</div>
                    <p className='text-xs font-semibold pr-6'>{description}</p>
                </div>

            </div>
        </div>
    )
}