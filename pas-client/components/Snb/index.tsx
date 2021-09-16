import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { DiCodeBadge } from 'react-icons/di';
import { FaLock, FaUnlock } from 'react-icons/fa';
import { FiUpload } from 'react-icons/fi';
import { GiExitDoor } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';

const Snb = () => {
  return (
    <IconContext.Provider value={{ size: '2rem', color: 'white' /* attr: { display: 'block' } */ }}>
      <div
        style={{
          background: 'rgb(30, 34, 40)',
          width: '4rem',
          borderRight: '1px rgb(68, 76, 86) solid',
          textAlign: 'center',
          padding: '0.5rem',
          height: 'calc(100vh - 4rem)',

        }}
      >
        {/* <div style={{ width: '4rem', borderRight: '1px rgb(68, 76, 86) solid' }}> */}
        <div style={{ margin: '1rem 0' }}>
          <DiCodeBadge />
        </div>
        <div style={{ margin: '1rem 0' }}>
          <FiUpload />
        </div>
        <div style={{ margin: '1rem 0' }}>
          <FaUnlock />
        </div>
        <div style={{ margin: '1rem 0' }}>
          <FaLock />
        </div>
        <div style={{ margin: '1rem 0' }}>
          <AiOutlineSetting />
        </div>
        <div style={{ margin: '1rem 0' }}>
          <GiExitDoor />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Snb;
