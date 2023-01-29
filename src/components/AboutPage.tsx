import React from 'react';

import useGameState, { ActionType } from '../state';
import { Text, Box, useInput } from 'ink';
import { Scene } from '../constants/constants';

export const AboutPage: React.FC = () => {
    const [{ scene }, dispatchState] = useGameState();
    useInput((_, { escape }) => {
        if (scene === Scene.AboutPage && escape) {
            dispatchState({ type: ActionType.SwitchScene, scene: Scene.StartMenu });
        }
    });
    return <>
        <Text backgroundColor='blue'>&gt;    About    &lt;</Text>
        <Box borderStyle='double' alignItems='center' flexDirection='column'>
            <Text>
                <Text color='yellow' bold>Freaking Terminal</Text>
                <Text> is a interactive</Text>
            </Text>
            <Text>text based room escape like</Text>
            <Text>puzzle game which lives directly</Text>
            <Text>in your terminal!</Text>
            <Text backgroundColor='blue'>&gt; ESC to return &lt;</Text>
        </Box>
    </>;
};
