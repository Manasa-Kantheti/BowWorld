import React, { useEffect, useState } from 'react';
import { getDogs } from '../config';
import './breeds.css';
import Marquee from "react-fast-marquee";
import Loader from './Loader';

const HomePageBreed = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        getDogs().then(result => {
            setLoader(false)
            setData(result.data.sort(() => .5 - Math.random()).slice(0, 10))
        })
            .catch(error => {
                setLoader(false)
                console.log('error', error)
            });
    }, [])

    return (
        <div className='homebreed-container pb-2'>
            <h2 className='px-2'>Featured Dog Breeds</h2>
            {loader ? <Loader /> :
                <Marquee>
                    {!!data && data.map(x => <div className="dog-images" key={x.id}>
                        <div className="dog-image">
                            <img src={x.image.url} alt={x.name} />
                            <p className='px-1'>{x.name}</p>
                        </div>
                    </div>)}
                </Marquee>}
        </div>
    )
}

export default HomePageBreed