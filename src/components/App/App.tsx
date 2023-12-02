import { Suspense, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import { appRoutes } from '../../routes/routes';
import { RoutesTypes } from './App.types';
import { Header } from '../global/Header';
import { LoaderText } from '../global/Loader';

const App = (): ReactElement => {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback={<LoaderText />}>
                    <Routes>
                        {appRoutes.map(({ path, element }: RoutesTypes): ReactElement => {
                            return <Route key={path} path={path} element={element} />
                        })}
                    </Routes>
                </Suspense>
            </main>
        </>
    );
};

export default App;
