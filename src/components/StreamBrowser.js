import React from 'react';
import {
    List,
    ListItem,
    ListItemText,
    LinearProgress,
    Typography,
    withStyles,
} from '@material-ui/core';
import Hyperlink from './Hyperlink';

const StreamBrowser = withStyles(theme => ({
    browser: {
        padding: theme.spacing.unit * 2.5,
    },
}))(({ streams, onNavigate, classes, loading }) => (
    <div className={classes.browser}>
        <Typography variant={'title'}>Stream Browser</Typography>
        {loading ? (
            <LinearProgress />
        ) : streams.length ? (
            <List>
                {streams.map(({ title, href }) => (
                    <ListItem button key={href}>
                        <ListItemText>
                            <Hyperlink href={href} onNavigate={onNavigate}>
                                {title}
                            </Hyperlink>
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        ) : (
            <Typography variant={'body2'}>
                No matching streams found.
            </Typography>
        )}
    </div>
));

export default StreamBrowser;
