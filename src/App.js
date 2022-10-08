import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <h1>VRAC Global Services Pvt. Ltd. Comment Section.</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
