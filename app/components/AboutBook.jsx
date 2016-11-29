import React from 'react';
import Card from './Card';

const AboutBook = () =>  {
    return (
        <section className="stripe">
            <Card plain className="text--center">
                <a href="https://leanpub.com/reactspeedcoding"
                   className="image__link">
                    <img width="200" src="https://s3.amazonaws.com/titlepages.leanpub.com/reactspeedcoding/hero?1471280934" />
                </a>
            </Card>
            <Card plain className="col--half text--center">
                <h1>Develop Awesome Apps</h1>
                <p className="subtext">
                    Join 100s of readers learning latest React ES6 concepts.
                </p>
            </Card>
        </section>
    );
};

export default AboutBook;