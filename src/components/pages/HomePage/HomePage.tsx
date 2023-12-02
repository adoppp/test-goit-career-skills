import { ReactElement } from 'react';

import car1 from '../../../assets/images/car1.png';
import car2 from '../../../assets/images/car2.png';

const HomePage = (): ReactElement => {
    return (
        <>
            <section>
                <div>
                    <h1>
                        DISCOVER THE TIMELESS ELEGANCE OF AUTOUA
                    </h1>
                    <div>
                        <ul>
                            <li>
                                <img src={car1} alt="" />
                            </li>
                            <li>
                                <img src="" alt="" />
                            </li>
                            <li>
                                <img src="" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;