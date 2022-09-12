import { FC } from "react";
import { useRouter } from "next/router";


const Article:FC = (props) => {
  const router = useRouter();
  const articleId = router.query.articleId;


  return (
    <div>this is article #{articleId}</div>
  )
}

export default Article;
