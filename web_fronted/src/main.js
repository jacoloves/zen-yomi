import React from 'react';
import ReactDOM from 'react-dom'; 
import _ from 'lodash';

import { makeStyles } from '@material-ui/styles';
import { theme } from './styles/theme';
import { Box, Typography, GridList } from '../node_modules/@material-ui/core';
import Cards from './component/Cards';
import News from './data/News.json';

const useStyles = makeStyles({
    NegaPosiTop: {
        textAlign: 'center'
    },  
    NewsBox: {
        textAlign: 'left',
        marginLeft: 60,
        marginRight: 60,
    },
});

const NegaPosiNews = () => {
    const classes = useStyles();

    return(
        <div className={classes.NegaPosiTop}>
            <h1>ネガポジニュース一覧</h1>
            <NegaBoxPosi />
            <div>
                <GridList>
                    {News.map((item) => (
                        <Cards headl={item.headline} word={item.words} />
                    ))}
                </GridList>
            </div>
            <NegaBoxNega />
        </div>
    );
}

const NegaBoxPosi = () => {
    const classes = useStyles();

    return(
        <Box
            style={{
                background: '#e33371'
            }}
            className={classes.NewsBox}
        >
            <Typography
                variant="h3"
                style={{
                    color: 'white'
                }}
            >
                Positive News
            </Typography>
        </Box>
    );
}

const NegaBoxNega = () => {
    const classes = useStyles();

    return(
        <Box
            style={{
                background: '#4791db'
            }}
            className={classes.NewsBox}
        >
            <Typography
                variant="h3"
                style={{
                    color: 'white'
                }}
            >
                Negative News
            </Typography>
        </Box>
    );
}

export default NegaPosiNews;

