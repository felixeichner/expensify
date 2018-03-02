// Higher Order Component (HOC) - A component (HOC) renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <h4>You need to be authenticated</h4>
      )}
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='Lucas quit his job!' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Lucas quit his job!' />, document.getElementById('app'));