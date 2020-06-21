import React from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
                html {
                    font-size: 62.5%;
                    box-sizing: border-box;
                }

                *, *:before, *:after {
                    box-sizing: inherit;
                }

                body {
                    font-size: 1.6rem;
                    line-height: 2;
                    font-family: 'Lato', sans-serif;
                }

                h1, h2, h3 {
                    margin: 0;
                    line-height: 1.5;
                }

                h1, h2 {
                    text-align: center;
                    font-famiy: 'Lato', sans-serif;
                    font-weight: 300;
                }

                h3 {
                    font-family: 'Roboto'; sans-serif;
                }

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .container {
                    max-width: 120rem;
                    margin: 0 auto;
                    width: 95%;
                }

                img {
                    max-width: 100%;
                }
            `}
            />
            <Helmet>
                <title>Real Estate Gatsby</title>
                <meta name="description" content="Sitio web de bienes raices en Gatsby" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,700&family=Roboto:ital,wght@0,400;1,700&display=swap" rel="stylesheet"></link>
            </Helmet>
            <Header />
            {children}
        </>
    );
}

export default Layout;