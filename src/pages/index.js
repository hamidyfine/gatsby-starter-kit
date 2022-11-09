import * as React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

const IndexPage = () => {
    return (
        <main>
            <h1>
        Congratulations
                <br />
                <span>— you just made a Gatsby site! 🎉🎉🎉</span>
            </h1>
            <p class="text-3xl font-bold underline">
        Edit <code>src/pages/index.js</code> to see this page
        update in real-time. 😎
            </p>
            <button class="btn btn-accent">Button</button>
            <FormattedMessage id="go_page2" />
        </main>
    );
};

export default injectIntl(IndexPage);

export const Head = () => <title>Home Page</title>;
