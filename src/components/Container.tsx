import { ReactNode } from "react"
import "./Container.scss"

interface Props {
    children: ReactNode;
    theme: string;
}

const Container = ({children, theme}: Props) => {
  return (
    <div className={"container-app " + theme + "-theme"}>
        {children}
    </div>
  )
}

export default Container