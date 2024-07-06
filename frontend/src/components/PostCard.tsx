import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  category: string;
  description: string;
};

const PostCard = ({ title, category, description }: PostCardProps) => {
  return (
    <div className={`${styles.postCardContainer} p-4`}>
      <h2 className="text-lg font-bold border-b-2 py-2">{category}</h2>
      <h1 className="py-4">{title}</h1>
      <p> {description} </p>
      <div className="grid grid-cols-3 py-2">
        <span className="border-t-2"> 3 minutes </span>
      </div>
    </div>
  );
};

export default PostCard;
