import Link from "next/link";
import Image from "next/image";

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
  const imagePathBaseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <Link href={"/asd"}>
      <div className="movie-container">
        <h2 className="movie-title-text">{title}</h2>
        <div className="movie-image-container">
          <Image
            src={imagePathBaseUrl + poster_path}
            alt={"movie poster"}
            width={200}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </Link>
  );
}
