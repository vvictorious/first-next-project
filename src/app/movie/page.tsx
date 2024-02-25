import Link from "next/link";

interface MovieProps {
  title: string;
  id: string;
  poster_path: string;
  release_date: string;
}

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
}: MovieProps) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Release Date</h2>
      <Link href={"/asd"}>
        <img src="" />
      </Link>
    </div>
  );
}
