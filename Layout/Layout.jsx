import React from 'react';

const Layout = (props) => {
  return (
    <div className="layout">
      <header>
        <h1>My Website</h1>
      </header>
      <main>{props.children}</main>
      <footer>
        <p>Copyright {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
