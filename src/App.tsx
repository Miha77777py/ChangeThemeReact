import { useState } from "react";
import NormalText from "./components/NormalText";
import TopBar from "./components/TopBar";
import Container from "./components/Container";


const App = () => {
    const [currentTheme, setCurrentTheme] = useState("light");

    return (
        <Container theme={currentTheme}>
            <TopBar
                theme={currentTheme}
                onSwitch={() => 
                    currentTheme === "light"
                        ? setCurrentTheme("dark")
                        : setCurrentTheme("light")
                }
            />
            <NormalText>Hello world!</NormalText>
        </Container>
    );
};

export default App;
