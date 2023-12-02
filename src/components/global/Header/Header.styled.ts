import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderLink = styled(NavLink)`
    transition-property: background-color, color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
        color: #ffffff;
        background-color: #3470FF;

        &:hover {
            background-color: #0B44CD;
            color: #D0D0D1;
        }

        &:active {
            background-color: #4078fc;
        }
    }
`;