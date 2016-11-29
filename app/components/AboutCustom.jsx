import React from 'react';
import World from './World';
import Card from './Card';

const AboutCustom = () => {
    return (
        <section className="stripe back--default">
            <Card plain className="col--half text--center">
                <h1>Custom React Component</h1>
                <p className="subtext">
                    This custom component demonstrates props, state and ES6 classes.
                </p>
            </Card>
            <Card className="col--one-third text--center back--white">
                <World />
            </Card>
        </section>
    );
};

export default AboutCustom;