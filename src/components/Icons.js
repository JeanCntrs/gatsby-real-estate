import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const IconList = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    li {
        display: flex;
        
        img {
            margin-right: 1rem;
        }
    }
`;

const Icons = ({ bathrooms, parking, rooms }) => {
    const { icons } = useStaticQuery(graphql`
        query {
            icons: allFile(filter: {relativeDirectory: {eq: "iconos"}}) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `);

    const iconsSVG = icons.edges;

    return (
        <IconList>
            <li>
                <img src={iconsSVG[2].node.publicURL} alt="bathroom icon" />
                <p>{bathrooms}</p>
            </li>
            <li>
                <img src={iconsSVG[1].node.publicURL} alt="parking icon" />
                <p>{parking}</p>
            </li>
            <li>
                <img src={iconsSVG[0].node.publicURL} alt="room icon" />
                <p>{rooms}</p>
            </li>
        </IconList>
    );
}

export default Icons;