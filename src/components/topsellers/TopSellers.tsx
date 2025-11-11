import { useEffect, useState } from "react";

interface UserType {
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchTopSellers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        if (!response.ok) {
          throw new Error(`HTTP error fetching ${response.status}`);
        }
        const data = await response.json();
        console.log(data.results);
        const authorsData: Author[] = data.results.map((user: UserType) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));
        setAuthors(authorsData);
      } catch (error) {
        console.error(`Error fetching authors ${error}`);
      }
    };
    fetchTopSellers();
  }, [setAuthors]);

  const handleFollowClick = (index: number) => {
    const updatedAuthors = authors.map((author, i) =>
      i === index ? { ...author, isFollowing: !author.isFollowing } : author
    );
    setAuthors(updatedAuthors);
  };

  return (
    <div className="bg-white p-4  mt-1 rounded w-full font-semibold  border border-gray-200  shadow-sm ">
      <h2 className="text-xl font-bold mb-5">Top Sellers</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-2 ">
            <section className="flex justify-center items-center ">
              <img
                src={author.image}
                alt={author.name}
                className="w-[35%] h-[35%] justify-center rounded-full"
              />
              <span className="ml-4">{author.name}</span>
            </section>
            <button
              onClick={() => handleFollowClick(index)}
              className={`py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-black text-white"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
