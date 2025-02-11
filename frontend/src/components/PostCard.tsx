import { CategoryType } from "../../../backend/src/shared/types";
import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  categories: CategoryType[];
  description: string;
  content: string;
  onClick: () => void;
};

const PostCard = ({
  title,
  categories,
  description,
  content,
  onClick,
}: PostCardProps) => {
  const numberOfMinutes = Math.ceil(content.split(" ").length / 200);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
      onClick={onClick}
    >
      <h4 className="text-2xl font-bold mb-2">{title}</h4>
      <p className="text-gray-700 mb-4 flex-grow">{description}</p>
      <div className="flex justify-between items-center text-gray-600 text-sm">
        <span>{`${numberOfMinutes} minutes read`}</span>
        <span>{categories.map((category) => category.name).join(", ")}</span>
      </div>
    </div>
  );
};

export default PostCard;
