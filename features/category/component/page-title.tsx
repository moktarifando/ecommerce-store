interface PageTitleProps {
  pageTitle: string | undefined;
}
export default function PageTitle({ pageTitle }: PageTitleProps) {
  return <div className="text-3xl text-center">{pageTitle}</div>;
}
