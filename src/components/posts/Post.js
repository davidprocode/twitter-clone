function Post(props) {

  return (
    <div className="post card">
      <div className="card-body">
        {props.post.content.body}
      </div>
    </div>
  );
}

export default Post;
