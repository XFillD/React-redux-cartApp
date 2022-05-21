import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader cartShowHandler={props.cartShowHandler} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
