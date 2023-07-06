import React from 'react';
import {RemoteComp} from '../RemoteComp/RemoteComp';

type Props = {};

/**
 * @return {React.FC<Props>}
 **/
export const Test: React.FC<Props> = ({}: Props) => {
  return (
    <div>
      <RemoteComp/>
    </div>
  );
};
