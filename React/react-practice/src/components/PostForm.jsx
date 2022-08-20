import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }


    return (
            <form>
                {
                    /*Управляемый компонент создается через useState
                    привязку value и отслеживание события onChange
                    и достигается двустороннее связывание*/
                }
                <MyInput
                    type="text"
                    placeholder="Название поста"
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                />

                {
                    /*Неуправляемый компонент создается через ref и функцию React.forwardRef*/
                }
                {/*<MyInput*/}
                {/*    type="text"*/}
                {/*    placeholder="Описание поста"*/}
                {/*    ref={bodyInputRef}*/}
                {/*/>*/}

                <MyInput
                    type="text"
                    placeholder="Описание поста"
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                />
                <MyButton
                    onClick={addNewPost}
                >
                    Создать пост
                </MyButton>
            </form>
    );
};

export default PostForm;