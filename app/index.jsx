import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import AboutBook from './components/AboutBook';
import AboutCharts from './components/AboutCharts';
import AboutForms from './components/AboutForms';
import AboutCustom from './components/AboutCustom';
import AboutWorkflow from './components/AboutWorkflow';
import AboutButtons from './components/AboutButtons';
import AboutAjax from './components/AboutAjax';
import AboutInfographics from './components/AboutInfographics';
import AboutEmbeds from './components/AboutEmbeds';

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

const routeConfig = (
    <Route path="/" component={Landing}>
        <IndexRoute component={AboutCharts} />
        <Route path="/book" component={AboutBook} />
        <Route path="/charts" component={AboutCharts} />
        <Route path="/embeds" component={AboutEmbeds} />
        <Route path="/forms" component={AboutForms} />
        <Route path="/custom" component={AboutCustom} />
        <Route path="/workflow" component={AboutWorkflow} />
        <Route path="/buttons" component={AboutButtons} />
        <Route path="/ajax" component={AboutAjax} />
        <Route path="/infographics" component={AboutInfographics} />
    </Route>
);

ReactDOM.render(
    <Router
        history={hashHistory}
        routes={routeConfig}
    />,
    document.getElementById('app')
);