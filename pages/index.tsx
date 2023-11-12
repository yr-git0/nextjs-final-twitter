import Layout from "../components/layout";
import Post from "../components/post";
import Tweet from "../components/tweet";
import useUser from "../libs/client/useUser";
import { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading || !user ? null : (
        <Layout>
          <div className="flex flex-col h-full">
            <div className="font-bold text-sm px-3 py-2 border-b-[1px] border-gray-200">
              Home
            </div>
            <Post />
            <div className="flex-1 overflow-y-scroll">
              {[1, 2, 3, 4, 5].map((i) => (
                <Tweet key={i} />
              ))}
            </div>
          </div>
        </Layout>
      )}
    </>
  );
};

export default Page;
