import React from 'react';

import { Scene } from '../constants/constants';
import { StartMenu } from './StartMenu';
import { AboutPage } from './AboutPage';
import useGameState from '../state';

const componentLookupTable: { [scene in Exclude<keyof typeof Scene, number>]: React.FC } = {
    StartMenu,
    AboutPage,
};

export const Frame: React.FC = () => {
    const [{ scene }] = useGameState();
    const Target = componentLookupTable[Scene[scene]] as React.FC;
    return <>
        <Target />
    </>;
};
