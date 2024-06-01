import "./NormalText.scss";

interface Props {
    children: string;
}

const NormalText = (props: Props) => {
    return (
        <div className="main">
            <h1 contentEditable="true" className="main__title">{props.children}</h1>
        </div>
    );
};

export default NormalText;
