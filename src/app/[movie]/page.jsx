import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const { movie } = params;
  const imagePathBaseUrl = "https://image.tmdb.org/t/p/original/";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <div className="about-container">
      <h1 className="about-page-title">Movie Detail</h1>
      <h2 className="small-spacer">{res.title}</h2>
      <div className="small-spacer">{res.release_date}</div>
      <div className="small-spacer">{res.runtime} minutes</div>
      <div className="small-spacer">{res.status}</div>
      <Image
        src={imagePathBaseUrl + res.backdrop_path}
        width={350}
        height={450}
        alt="movie poster"
				style={{ objectFit: "cover" }}
      />
			<Link className="back-btn" href={`/`}>Back</Link>
    </div>
  );
}
