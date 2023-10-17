    import AltStripes from '@/components/AltStripes/index'
    import DataCard from '@/components/DataCard/index'
    import Holidays from '@/components/Holidays/index'
    import Show from '@/components/Show/index'
    import React from 'react'
    import style from './style.module.css'

    const data = [
        {
            title: 'Attendance',
            contentComponent: Show,
        },
        {
            title: 'Personal Details',
            contentComponent: AltStripes,
        },
        {
            title: 'ersonal Details',
            contentComponent: AltStripes,
        },
        {
            title: 'rsonal Details',
            contentComponent: AltStripes,
        },
    ]

    const WideCards = () => {
        return (
            <div className={style.container}>
                {data.map((item, index) => (
                    <DataCard key={index} item={item} />
                ))}
            </div>
        )
    }

    export default WideCards