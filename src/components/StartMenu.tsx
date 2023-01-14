import React from 'react';
import { Text } from 'ink';
import SelectInput from 'ink-select-input'

export const StartMenu: React.FC = () => {
    return <>
        <Text backgroundColor={"blue"}>&gt;    Freaking Terminal    &lt;</Text>
        <SelectInput items={[
            { label: 'About & Help', value: 'help' },
            { label: 'Select a save file...', value: 'save' },
            { label: 'Start', value: 'start' },
        ]}></SelectInput>
    </>
};