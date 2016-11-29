import React from 'react';

const AboutInfographics = () => {
    render(
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
    );
};

export default AboutInfographics;