import React, { FC, ReactNode } from 'react';
import Head from 'next/head';

type CustomHeadProps = {
  title?: string;
  children?: ReactNode;
};

const CustomHead: FC<CustomHeadProps> = ({ title, children }) => {
  return (
    <Head>
      <title> {`${title} | Fancy Todo`} </title>
      {children}
    </Head>
  );
};

export default CustomHead;
