import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getPosts, createPost, deletePost } from './postSlice';

const Post = () => {
  const dispatch = useAppDispatch()
  const { entities, deleted, post } = useAppSelector((state) => state.post);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, post, deleted]);

  const handlePost = (event: any) => {
    event.preventDefault();
    dispatch(createPost({ name, description }));
    setName('');
    setDescription('');
  }

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  }

  const handleDelete = (id: string) => {
    dispatch(deletePost(id));
  }

  return (
    <div>
      <h1>Posts - extraReducer - Redux Toolkit</h1>
      <ul>
        { (entities as any)?.data && (entities as any).data.map((data: any) => (
          <div key={data._id}>
            <span>{ data.name } - { data.description }</span>
            <button onClick={() => handleDelete(data._id)}>Eliminar</button>
          </div>
        )) }
      </ul>

      <div>
          <form onSubmit={handlePost}>
            <input 
              type="text" 
              onChange={onChangeName} 
              value={name}  
            />

            <input 
              type="text" 
              onChange={onChangeDescription} 
              value={description}  
            />
            
            <input type="submit" value="Agregar" />
          </form>
      </div>

      <hr />
    </div>
  );
};

export default Post;
