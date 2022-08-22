import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    let navigate = useNavigate();

    async function handleRedirect(path) {
        navigate(path, { replace: true });
    }


    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton
                    onClick={() => props.remove(props.post)}
                >
                    Удалить
                </MyButton>
                <MyButton
                    onClick={() => handleRedirect(`${props.post.id}`)}
                >
                    Открыть
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;