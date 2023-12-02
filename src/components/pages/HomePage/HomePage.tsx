import { ReactElement } from 'react';

import car1 from '../../../assets/images/car1.png';
import car2 from '../../../assets/images/car2.png';
import car3 from '../../../assets/images/car3.png';

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
                                <img src={car1} alt={car1} />
                            </li>
                            <li>
                                <img src={car2} alt={car2} />
                            </li>
                            <li>
                                <img src={car3} alt={car3} />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;