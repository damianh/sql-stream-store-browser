/* tslint:disable:object-literal-sort-keys */
const rels: { [rel: string]: string } = {
    self: 'self',
    first: 'first',
    previous: 'previous',
    next: 'next',
    last: 'last',
    curies: 'curies',
    feed: 'streamStore:feed',
    message: 'streamStore:message',
    metadata: 'streamStore:metadata',
    index: 'streamStore:index',
    append: 'streamStore:append',
    deleteStream: 'streamStore:delete-stream',
    deleteMessage: 'streamStore:delete-message',
    find: 'streamStore:find',
    browse: 'streamStore:feed-browser',
};

export default rels;
