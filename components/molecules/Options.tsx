import React, { useState } from "react"
import ButtonShowPanel from "./ButtonShowPanel"

export const Options = () =>{
    const [activePanel, setActivePanel] = useState<string | null>(null);

    const handleToggle = (id: string) => {
      setActivePanel(prev => (prev === id ? null : id));
    };

    return(
        <>
            <ButtonShowPanel
            id="notifi"
            nameForIcon="notifications"
            titleForIcon="Actualizaciones"
            isActive={activePanel === "notifi"}
            togglePanel={handleToggle}
            />
            <ButtonShowPanel
            id="messa"
            nameForIcon="sms"
            titleForIcon="Mensajes"
            isActive={activePanel === "messa"}
            togglePanel={handleToggle}
            />
        </>
    )
}
