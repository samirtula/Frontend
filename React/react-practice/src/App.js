import React, {useRef, useState, useMemo} from "react";
import './styles/App.css';
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: '234', body: '234'},
        {id: 2, title: '1234 2', body: '789'},
        {id: 3, title: '56564 3', body: '56546'}
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }

        return posts;
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    return (
        <div className="App">
            <PostForm
                create={createPost}
            />
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
                <PostList
                    posts={sortedAndSearchedPosts}
                    title='Список постов про JS'
                    remove={removePost}
                />
        </div>
    );
}

export default App;
