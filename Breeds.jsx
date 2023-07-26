import React, { useEffect, useState } from 'react'
import './breeds.css'
import { getDogs } from '../config'
import Loader from './Loader'
import BreedDetails from './BreedDetails'

const Breeds = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    const [open, setOpen] = useState(false);
    const [cardId, setCardId] = useState(0);
    const [imgUrl, setImagUrl] = useState("");

    const handleOpen = (id, url) => {
        setOpen(true)
        setCardId(id)
        setImagUrl(url)
    };

    const handleClose = () => setOpen(false);

    useEffect(() => {
        setLoader(true)
        getDogs().then(result => {
            setLoader(false)
            setData(result.data)
        })
            .catch(error => {
                setLoader(false)
                console.log('error', error)
            });
    }, [])

    return (
        <div className='breeds-container'>
            {loader ? <Loader /> :
                <>
                    {!!data && data.map(x => <div className="dog-images c-pointer" key={x.id} onClick={() => handleOpen(x.id, x.image.url)}>
                        <div className="dog-image">
                            <img src={x.image.url} alt={x.name} />
                            <p className='px-1'>{x.name}</p>
                        </div>
                    </div>)}
                </>
            }
            {open && !!cardId &&
                <BreedDetails open={open} handleClose={handleClose} cardId={cardId} imgUrl={imgUrl}/>
            }
        </div>
    )
}

export default Breeds