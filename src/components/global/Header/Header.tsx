import { ReactElement } from 'react';
import classNames from 'classnames/bind';

import { routes } from '../../../routes/routes';
import styles from './Header.module.scss';
import { HeaderLink } from './Header.styled';

const cn = classNames.bind(styles);

const Header = (): ReactElement => {
    return (
        <header>
            <div className={cn('header__container')}>
                <nav>
                    <ul className={cn('header__list')}>
                        <li>
                            <HeaderLink to={routes.HOME_PAGE}>
                                AutoUa
                            </HeaderLink>
                        </li>
                        <li>
                            <HeaderLink to={routes.CATALOG_PAGE}>
                                Cataloge
                            </HeaderLink>
                        </li>
                        <li>
                            <HeaderLink to={routes.FAVORITES_PAGE}>
                                Favotites
                            </HeaderLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { Header };