import styles from "./PostCard.module.css";

type PostCardProps = {
  title: string;
  category: string;
  description: string;
};

const PostCard = ({ title, category, description }: PostCardProps) => {
  return (
    <div className={`${styles.postCardContainer}`}>
      <h1>{title}</h1>
      <h2>{category}</h2>
      <p> {description} </p>
    </div>
  );
};

export default PostCard;
