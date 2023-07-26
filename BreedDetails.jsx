import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { getDogDetailsByID } from '../config';
import Loader from './Loader';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const BreedDetails = (props) => {
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(false)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        setLoader(true)
        getDogDetailsByID(props.cardId).then(result => {
            setLoader(false)
            setData(result.data)
        })
            .catch(error => {
                setLoader(false)
                console.log('error', error)
            });
    }, [])

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            {loader ? <Loader /> : <DialogContent>
                {!!data && <Card sx={{ maxWidth: 345 }} style={{ boxShadow: 'none' }}>
                    <CardHeader
                        title={data.name}
                        subheader={`Origin: ${!!data.origin ? data.origin: 'Not Specified'}`}
                    />
                    {!!props.imgUrl && <CardMedia
                        component="img"
                        height="194"
                        image={props.imgUrl}
                        alt={data.name}
                    />}
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Bred For : {data.bred_for}
                        </Typography>

                        <Typography variant="body2" color="text.secondary">
                            Breed Group : {data.bred_group ?? 'Not Specified'}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Temperament : {data.temperament}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Life Span : {data.life_span}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                <Typography style={{ padding: '1rem 0' }}>Height and Weight in USA:</Typography>
                                Height : {!!data.height && data.height.imperial}
                                <div></div>
                                Weight :{!!data.weight && data.weight.imperial}

                                <Typography style={{ padding: '1rem 0' }}>Height and Weight in India:</Typography>
                                Height : {!!data.height && data.height.metric}
                                <div></div>
                                Weight :{!!data.weight && data.weight.metric}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>}
            </DialogContent>}
            <DialogActions>
                <Button onClick={props.handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default BreedDetails