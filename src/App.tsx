import React, {useState} from 'react';
import { getComments } from './redux/actionCreators/getComment';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypeSelector';

function App() {
  const dispatch = useDispatch();
  const [postId, setPostID] = useState("");
  const { comments, loading, error } = useTypedSelector((state) => state.comments);

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await dispatch(getComments(postId));
  }

  return (
      <div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <input type={"number"} value={postId} onChange={(e) => setPostID(e.target.value)} />\
          <button type="submit"> submit </button>
        </form>
      </div>

      {
        loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {
              comments.map((comment) => {
                return(<li key={comment.id}>{comment.body}</li>)
              })
            }
          </ul>
        )
      }
      </div>
  );
}

export default App;
