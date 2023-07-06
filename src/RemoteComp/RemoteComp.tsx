import React, {Suspense} from 'react';
import {Header} from 'mf_app/Header'

export const RemoteComp: React.FC = ({}) => {
  return (
    <div>
      <Suspense fallback={123}>
        <Header></Header>
      </Suspense>
    </div>
  );
};
