import React, { useEffect } from "react";

import Head from "next/head";

import styled from "styled-components";

import Layout from "../components/Layout/Layout";
import Block from "../components/Block/Block";
import Wrap from "../components/Wrap/Wrap";

import Hotels from "../components/Hotels/Hotels";
import Filters from "../components/Filters/Filters";

import { data } from "../hotels";

export const LayoutWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
`;

export default function Home() {
  useEffect(() => {
    data.forEach((item) => {
      const reviewArray = item.reviews;
      const newArray = reviewArray.map((item) => {
        return item.rating;
      });
      const rating = newArray.reduce((partialSum, a) => partialSum + a, 0) / newArray.length;
      item.rating = Number(rating.toFixed(0));
      return item;
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Booking app</title>
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
