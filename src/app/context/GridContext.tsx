'use client'

import React, {
    useState,
    Dispatch,
    SetStateAction,
    createContext,
} from "react";

type Props = {
    children: React.ReactNode;
};

type GridContextProps = {
    grid: boolean;
    setGrid: Dispatch<SetStateAction<boolean>>;
};

const GridContextState = {
    grid: true,
    setGrid: () => { },
};

export const GridContext = createContext<GridContextProps>(GridContextState);

export function GridComponent({ children }: Props) {
    const [grid, setGrid] = useState<boolean>(true)

    return (
        <GridContext.Provider value={{ grid, setGrid }}>
            <>{children}</>
        </GridContext.Provider>
    );
}

export default GridComponent;