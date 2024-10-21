import MovieInfo, { getMovie } from "@/component/movie-info";
import MovieVideos from "@/component/movie-videos";
import { Suspense } from "react";

interface IParams {
    params: {id:string};
}

export async function generateMetadata({params:{id}} : IParams) {
    const movie = await getMovie(id)
    return {
        title : movie.title,
    }
}

export default function MovieDetail({params:{id},}: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loaing Movie Info</h1>}>
                <MovieInfo id = {id}/>
            </Suspense>
            <Suspense fallback={<h1>Loaing movie Video</h1>}>
                <MovieVideos id = {id}/>
            </Suspense>
        </div>
    )
}