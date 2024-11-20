import React from "react";
import NoteContext from "./Notecontext";

const NoteState = (props) => {
    const state = {
        name: "Shubham",
        class: "10b",
    };

    return (
        <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
    );
};

export default NoteState;
