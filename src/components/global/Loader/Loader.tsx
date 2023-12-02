import { ReactElement } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const LoaderText = (): ReactElement => {
    return (
        <div>
            <Segment>
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>

            <Segment>
                <Dimmer active inverted>
                    <Loader inverted>Loading</Loader>
                </Dimmer>

                <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
        </div>
    );
};

export { LoaderText };