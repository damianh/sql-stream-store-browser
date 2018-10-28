import { IconButton } from '@material-ui/core';
import React, {
    FormEventHandler,
    PureComponent,
    StatelessComponent,
} from 'react';
import { navigation } from '../stream-store';
import { HalLink, HalLinks, NavigatableProps } from '../types';
import { withNavigation } from './NavigationProvider';
import RelIcon from './RelIcon';

interface FeedNavigationLinkProps {
    link: HalLink;
    rel: string;
}

const FeedNavigationLink: StatelessComponent<
    FeedNavigationLinkProps
> = withNavigation()(
    class What extends PureComponent<
        FeedNavigationLinkProps & NavigatableProps
    > {
        _handleOnClick: FormEventHandler = e => {
            const { onNavigate, authorization, link } = this.props;

            e.preventDefault();

            if (!link) {
                return;
            }

            return onNavigate(link, authorization);
        };

        render() {
            const { rel, link } = this.props;
            return (
                <IconButton disabled={!link} onClick={this._handleOnClick}>
                    <RelIcon rel={rel} />
                </IconButton>
            );
        }
    },
);
interface NavigationLinksProps {
    links: HalLinks;
}

const NavigationLinks: StatelessComponent<NavigationLinksProps> = ({
    links,
}) => (
    <nav>
        {[...navigation].map(rel => (
            <FeedNavigationLink
                key={rel}
                link={(links[rel] || [])[0]}
                rel={rel}
            />
        ))}
    </nav>
);

export default NavigationLinks;