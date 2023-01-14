import React from 'react';

import { Box } from 'ink';
import { useHookedConstants, constants as nonHookedConstants } from './constants/constants';
import { StartMenu } from './components/StartMenu';

export const App: React.FC = () => {
    const constants = {
        ...useHookedConstants(),
        ...nonHookedConstants,
    };
    return <Box
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width={constants.width}
        height={constants.height}
        minWidth={constants.minWidth}
        minHeight={constants.minHeight}
    >
        <StartMenu></StartMenu>
    </Box>;
};