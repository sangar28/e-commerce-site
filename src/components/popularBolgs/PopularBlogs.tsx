import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "How Smartwatches Became the New Fitness Partner",
      author: "Olivia Kim",
      likes: 198,
      comments: 29,
    },
    {
      title: "The Secret Behind Long-Lasting Perfumes",
      author: "Sophia Adams",
      likes: 245,
      comments: 52,
    },
    {
      title: "The Rise of Eco-Friendly Beauty Products",
      author: "Mason Green",
      likes: 162,
      comments: 19,
    },
  ];

  return (
    <div className="bg-white p-4  mt-2  rounded w-full font-semibold  border border-gray-200  shadow-sm ">
      <h1 className="text-xl font-bold mb-5">Popular Blogs</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-5">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-">{blog.title}</span>
            </div>
            <span className="text-gray-600">Published by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.likes}</span>
              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PopularBlogs;
