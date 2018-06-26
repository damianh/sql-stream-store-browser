import React from 'react';
import { MuiThemeProvider }  from '@material-ui/core/styles';
import { Observable as obs } from 'rxjs';

import { Stream, StreamMessage, Index, mount } from './components';
import { actions, store, rels } from './stream-store';
import theme from './theme';
import { createState, connect } from './reactive';

const viewsByRel = {
    [rels.feed]: <Stream />,
    [rels.message]: <StreamMessage />,
    [rels.index]: <Index />
};

const getSelfAlias = links => Object
    .keys(links)
    .filter(rel => rel.indexOf("streamStore:") === 0)
    .filter(rel => links[rel].href === links.self.href)[0];

const self$ = store.links$
    .filter(links => links.self)
    .map(getSelfAlias)
    .filter(rel => !!rel);

const state$ = createState(obs.merge(
    self$.map(self => ['self', () => self])
));

const initialNavigation = () => actions.get.next(window.location.href);

const SqlStreamStoreBrowser = ({ self }) => (
    <MuiThemeProvider theme={theme} >
        <div>
            {viewsByRel[self] && viewsByRel[self]}
        </div>
    </MuiThemeProvider>);

export default mount(initialNavigation)(connect(state$)(SqlStreamStoreBrowser));
