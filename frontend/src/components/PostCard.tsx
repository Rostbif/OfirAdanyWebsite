//import { CategoryType } from "../../../backend/src/shared/types";
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
  // calculating the time that it will take to read the article based on the
  const numberOfMinutes = Math.ceil(content.split(" ").length / 200);

  return (
    <div className={`${styles.postCardContainer} p-4`} onClick={onClick}>
      <h1 className="text-2xl font-bold border-b-2 py-2">{title}</h1>
      {/* <h1 className="py-4">{title}</h1> */}
      <p className="text-xl"> {description} </p>
      <div className="grid grid-cols-3 py-2">
        <span className="border-t-2"> {`${numberOfMinutes} minutes`} </span>
      </div>
      <div className="py-2">
        <span className="border-t-2">
          {" "}
          {categories
            .map((category) => category.name)
            .reduce(
              (preValue, currentValue) => preValue + ", " + currentValue
            )}{" "}
        </span>
      </div>
    </div>
  );
};

export default PostCard;
