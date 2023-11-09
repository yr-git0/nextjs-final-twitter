import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "../components/layout";

const Page: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
