import React, { createContext, useContext } from 'react';
import { Scene } from '../constants/constants';
import { useImmerReducer } from 'use-immer';

interface GameState {
    scene: Scene;
}

export enum ActionType {
    SwitchScene,
}

interface BaseAction<Type extends ActionType = ActionType> {
    type: Type;
}

type Action =
    | SwitchSceneAction;

interface SwitchSceneAction extends BaseAction<ActionType.SwitchScene> {
    scene: Scene;
}

export const GameStateProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [gameState, dispatchState] = useImmerReducer<GameState, Action>((draft, action) => {
        switch (action.type) {
            case ActionType.SwitchScene: {
                draft.scene = action.scene;
                break;
            }
        }
    }, {
        scene: Scene.StartMenu,
    });

    return (
        <GameStateContext.Provider value={gameState}>
            <DispatchStateContext.Provider value={dispatchState}>
                {children}
            </DispatchStateContext.Provider>
        </GameStateContext.Provider>
    );
};

const GameStateContext = createContext<GameState>(null);
const DispatchStateContext = createContext<React.Dispatch<Action>>(null);

export default function useGameState() {
    const gameState = useContext(GameStateContext);
    const dispatchState = useContext(DispatchStateContext);
    return [gameState, dispatchState] as const;
}
