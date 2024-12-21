import Link from "next/link";

interface BreadCrumbProps {
  title: string;
}

export default function BreadCrumb({ title }: BreadCrumbProps) {
  return (
    <div className="flex gap-2 items-center text-sm text-grey-600">
      <Link href="/">Home</Link>
      <h1>&gt;</h1>
      <h1>{title}</h1>
    </div>
  );
}
