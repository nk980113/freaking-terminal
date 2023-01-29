// import {} from 'react';
import { useStdout } from 'ink';

export function useHookedConstants() {
    const { stdout } = useStdout();
    return {
        width: stdout.columns,
        height: stdout.rows,
    };
}

export enum Scene {
    StartMenu,
    AboutPage,
}

export const constants = {
    minWidth: 40,
    minHeight: 30,
};
