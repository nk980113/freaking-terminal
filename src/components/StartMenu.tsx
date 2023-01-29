import React, { useCallback } from 'react';

import { Text, Newline, useInput, useApp } from 'ink';
import SelectInput from 'ink-select-input';
import useGameState, { ActionType } from '../state';
import { Scene } from '../constants/constants';

const items = [
    { label: 'About                ', value: 'about' } as const,
    { label: 'Select a save file...', value: 'save' } as const,
    { label: 'Start                ', value: 'start' } as const,
];
export const StartMenu: React.FC = () => {
    const [{ scene }, dispatchState] = useGameState();
    const setScene = useCallback((scene: Scene) => {
        dispatchState({ type: ActionType.SwitchScene, scene });
    }, []);
    const { exit } = useApp();
    useInput((_, { escape }) => {
        if (scene === Scene.StartMenu && escape) exit();
    });
    const select = useCallback(({ value }: { value: typeof items[number]['value'] }) => {
        switch (value) {
            case 'about': setScene(Scene.AboutPage);
        }
    }, []);
    return <>
        <Text backgroundColor='blue'>&gt;    Freaking Terminal    &lt;</Text>
        <Newline />
        <SelectInput
            items={items}
            itemComponent={({ isSelected, label }) => isSelected
                ? <Text backgroundColor='blue'>&gt; {label} &lt;</Text>
                : <Text>{label}</Text>
            }
            indicatorComponent={() => <></>}
            onSelect={select}
        />
    </>;
};
