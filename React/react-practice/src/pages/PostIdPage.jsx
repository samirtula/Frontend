import React from 'react';
import {useParams} from "react-router-dom";

const PostIdPage = () => {
    const params = useParams();

    return (
        <div>
            Вы попали на страницу поста c id = {params.id}
        </div>
    );
};

export default PostIdPage;