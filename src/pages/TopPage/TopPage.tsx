import { Helmet } from "react-helmet-async";
import { useLiff } from "@/hooks/useLiff";
import { buildAppTitle } from "@/utils/string";

export type TopPageViewProps = {
  idToken?: string | undefined;
};

export const TopPageView = ({ idToken }: TopPageViewProps): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>{buildAppTitle("LINE ミニアプリの検証")}</title>
      </Helmet>

      <div className="px-5">LINE ミニアプリの検証用サイト</div>
      <div className="px-5">idToken: {idToken}</div>

      <button
        type="button"
        onClick={() => {
          window.location.href = "./external-site.html";
        }}
      >
        LINEミニアプリ外の外部サイトへ遷移
      </button>

      <a href="./external-site.html">Aタグリンク</a>
    </>
  );
};

export const TopPage = (): JSX.Element => {
  const { idToken } = useLiff();

  return <TopPageView idToken={idToken} />;
};
