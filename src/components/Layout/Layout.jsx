import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import AppBar from "components/AppBar";
import { Main } from "./Layout.styled";
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />
      <Main>
        <Suspense fallback={<Loader text='Loading page'/>}>
          <Outlet />
        </Suspense>
      </Main>;
    </>
  );
};

export default Layout;