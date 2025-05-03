import { IconSpan } from "../atoms/IconSpan";
import { useEffect, useRef} from "react"

export default function ButtonShowPanel({titleForIcon, nameForIcon,id, togglePanel,isActive}:{titleForIcon:string, nameForIcon:string, id:string, togglePanel:(id:string) => void, isActive:boolean}) {
    const panelRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        let timeout: number;
    
        if (isActive) {
          // Agregamos el listener después de un micro-momento
          timeout = window.setTimeout(() => {
            function handleClickOutside(event: MouseEvent) {
              const target = event.target as Node;
    
              const clickedOutsidePanel =
                panelRef.current && !panelRef.current.contains(target);
              const clickedOutsideButton =
                buttonRef.current && !buttonRef.current.contains(target);
    
              if (clickedOutsidePanel && clickedOutsideButton) {
                togglePanel("");
              }
            }
    
            window.addEventListener("click", handleClickOutside);
    
            // Limpieza
            return () => {
              window.removeEventListener("click", handleClickOutside);
            };
          }, 0);
        }
    
        return () => clearTimeout(timeout);
      }, [isActive]);
    
    return(
        <>
            <button ref={buttonRef} onClick={() =>togglePanel(id)}>
                <IconSpan title={titleForIcon} nameIcon={nameForIcon} showMessage={true}/>
            </button>
            {isActive && (
                <div className="container-panel" ref={panelRef}>
                    <section className="body-panel">
                        <h3>{titleForIcon}</h3>
                    </section>
                </div>
            )}
        </>
    )    
}
