import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import YouTube from './YouTube';
import IconText from './IconText';

export default class Home extends Component {
    render() {
        return(
            <section className="landing">
                <nav className="nav">
                    <a className="nav__brand" href="/">
                        ReactSpeed
                    </a>
                    <a className="nav__link" href="https://leanpub.com/reactspeedcoding">Book</a>
                    <a className="nav__link" href="https://github.com/manavsehgal/react-speed-book">Code</a>
                    <a className="nav__link" href="https://manavsehgal.github.io/react-speed-demos/">Demos</a>
                    <a className="nav__link" href="https://reactspeed.com">Website</a>
                </nav>
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
                <section className="stripe">
                    <Card plain className="col--one-third text--center back--white">
                        <YouTube videoid="MGuKhcnrqGA"/>
                    </Card>
                    <Card plain className="col--half text-center">
                        <h1>Embed React Components</h1>
                        <p className="subtext">
                            This custom component demonstrates media embed within custom React component.
                        </p>
                    </Card>
                </section>
                <section className="stripe--slim back--gray">
                    <Card plain className="col--full text--center white">
                        <p>
                            Copyright (c) 2016, Manav Sehgal
                            All rights reserved.
                        </p>
                    </Card>
                </section>
                <section className="stripe back--default">
                    <Card className="col--one-third text--center back--white">
                        <IconText className="primary" size="5x" icon="globe" text="Nine Component Creation Strategies"/>
                    </Card>
                    <Card className="col--one-fourth back--white">
                        <h3>
                            <IconText slim icon="building" text="Modular Architecture" className="danger" />
                        </h3>
                        <h3>
                            <IconText slim icon="cloud" text="Leverages Cloud" className="default" />
                        </h3>
                        <h3>
                            <IconText slim icon="cog" text="30 Custom Components" className="secondary" />
                        </h3>
                        <h3>
                            <IconText slim icon="bullseye" text="Goal Oriented Design" className="warning" />
                        </h3>
                    </Card>
                    <Card plain className="col--one-third text--center">
                        <h1>Infographic Components</h1>
                        <p className="subtext">
                            Custom React components easily reusable to
                            create variety of Infographic elements.
                        </p>
                    </Card>
                </section>
            </section>
        );
    }
}