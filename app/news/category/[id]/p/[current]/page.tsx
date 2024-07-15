import { notFound } from "next/navigation";
import { getNewsList, getCategoryDetail } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  params: {
    id: string;
    current: string;
  };
};

export default async function Page({ params }: Props) {
  const current = parseInt(params.current, 10);

  // 数字以外の文字列をがわたって来た場合
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  // カテゴリーIDが存在しているかどうかを確認
  const category = await getCategoryDetail(params.id).catch(notFound);

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  // 存在しているコンテンツ以上の数値がわたって来た場合
  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={current}
        basepath={`/news/category/${category.id}`}
      />
    </>
  );
}
