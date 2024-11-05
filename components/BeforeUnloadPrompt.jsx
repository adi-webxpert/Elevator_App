// components/BeforeUnloadPrompt.js

import React from 'react';
import { Beforeunload } from 'react-beforeunload';

const BeforeUnloadPrompt = () => {
  const handleBeforeunload = () => {
    return 'Are you sure you want to leave? Your changes may not be saved.';
  };

  return (
    <Beforeunload onBeforeunload={handleBeforeunload} />
  );
};

export default BeforeUnloadPrompt;
