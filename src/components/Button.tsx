interface Props {
    children: string;
    type?: string;
    onClick: () => void;
}

const Button = ({children, type = "outline-dark", onClick}: Props) => {
  return (
    <button 
        className={"btn btn-" + type}
        onClick={onClick}
    >
        {children}
    </button>
  )
}

export default Button