import Button from "./Button";
import "./TopBar.scss";

interface Props {
    theme: string;
    onSwitch: () => void;
}

const TopBar = ({theme, onSwitch}: Props) => {
    return (
        <div className={"nav " + theme + "-theme"}>
            <Button 
                onClick={onSwitch}
                type={
                    theme === "dark"
                        ? "dark"
                        : "outline-dark"
                }
            >Switch Theme</Button>
        </div>
    );
};

export default TopBar;
