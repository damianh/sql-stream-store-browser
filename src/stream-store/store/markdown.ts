import actions from 'stream-store/actions';
import { mediaTypes } from 'utils';
import mediaType$ from './mediaType';

const body$ = actions.get.response
    .zip(mediaType$)
    .filter(([body, mediaType]) => mediaType === mediaTypes.markdown)
    .map(([{ body }]) => body);

export default {
    body$,
};
