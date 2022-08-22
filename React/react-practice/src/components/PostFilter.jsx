import React from 'react';
import MyInput from "./UI/input/MyInput";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Поиск"
                value={filter.query}
                onChange={e => {setFilter({...filter, query: e.target.value})}}
            />
            <Select options={[
                {
                    value: 'title',
                    name: 'По названию'
                },
                {
                    value: 'body',
                    name: 'По описанию'
                }
            ]}
                    defaultValue={'Сортировка'}
                    value={filter.sort}
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    );
};

export default PostFilter;