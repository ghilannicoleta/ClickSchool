import React from "react";
import LikeButton from "./LikeButton";
import Paragraph from "./Paragraph";
import LorumIpsum from "./LoremIpsum";

class LikeContainer extends React.Component {
    
        render() {
            return (
                <div className="like_container">
                    <span className="text-3xl font-bold underline">Here is a container:</span>
                    <br />
                    <LikeButton text="Click here" hover afterClickText="YOu liked this.." />
                    <br />
                    <LikeButton text="Like me" afterClickText={"YOU clicked"} />
                    <br />
                    <LikeButton text="Here is a button" hover={true} />
                    <br />
                    <LikeButton text="Another button" hover={false} />
                    <Paragraph />
                    <LorumIpsum title="Here is a title" />
                </div>
            );
        }
    }
    

export default LikeContainer