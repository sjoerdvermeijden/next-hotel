import Head from 'next/head'

import styled from 'styled-components';

import Layout from "../components/Layout/Layout";
import Block from "../components/Block/Block";
import Wrap from "../components/Wrap/Wrap";

import Hotels from '../components/Hotels/Hotels'
import Filters from '../components/Filters/Filters'

export const LayoutWrapper = styled.div`

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Block>
          <Wrap>
            <LayoutWrapper>
              <Filters />
              <Hotels />
            </LayoutWrapper>
          </Wrap>
        </Block>
      </Layout>
    </div>
  );
}
