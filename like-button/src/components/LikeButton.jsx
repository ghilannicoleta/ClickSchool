import React from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        const { hover, afterClickText, text } = this.props;

        if (this.state.liked) {
            return (
                <h2>{afterClickText || "You clicked and liked"}</h2>
            );
        }

        let buttonStyle = "bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded";
        const hoverStyle = "hover:bg-blue-500 hover:text-white hover:border-transparent"

        if (hover) {
            buttonStyle = `${buttonStyle} ${hoverStyle}`;
        }

        return (
            <button
                className={buttonStyle}
                onClick={() => this.setState({ liked: true })}
            >
                {text}
            </button>
        );
    }
}

export default LikeButton