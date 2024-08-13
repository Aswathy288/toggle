import BgColor from "./BgColor";

const App = () => {
  return (
    <div className="card">
      <BgColor
      name = "Harry potter"
      btn ="Toggle Color"
      imageUrl = "https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/Harry-Potter-Movies-in-Order.jpg"
      about = "Hello! I am Harry, a passionate developer and an avid reader."
      head1 = "Hobbies"
      list1 = {["Reading", "Travelling", "Cooking"]}
      head2 = "Favourite Foods"
      list2 = {["Pizza", "Sushi", "Ice Cream"]}
      />
    </div>
  );
}

export default App;