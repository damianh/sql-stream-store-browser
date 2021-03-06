import { Button } from '@material-ui/core';
import { ButtonProps } from '@material-ui/core/Button';
import RelIcon from 'components/RelIcon';
import React, { StatelessComponent } from 'react';

interface RelButtonProps {
    rel: string;
    title?: string;
}

const RelButton: StatelessComponent<RelButtonProps & ButtonProps> = ({
    rel,
    onClick,
    title,
    ...props
}) => (
    <Button variant={'text'} onClick={onClick} {...props}>
        <RelIcon rel={rel} color={'action'} />
        {title || rel}
    </Button>
);

export default RelButton;
