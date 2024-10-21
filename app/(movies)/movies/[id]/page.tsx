import MovieInfo from "@/component/movie-info";
import MovieVideos from "@/component/movie-videos";
import { Suspense } from "react";

export default function MovieDetail({params:{id},}: {params:{id: string};}) {
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