import React from 'react'
import './choose.css'

const ChooseCard = (props) => {
    return (
        <div className='choose-container-bg d-flex flex-direction'>
            <h2 className='px-2 text-white'>Why Choose BowWorld?</h2>
            <div className='choose-container'>
                <div className="choose-wrapper">
                    {props.chooseCardData.map(x => <div className="choose-box" key={x.title}>
                        <h2>{x.title}</h2>
                        <h3>{x.subTitle}</h3>
                        <p>
                            {x.desc}
                        </p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default ChooseCard