const API = "https://api.themoviedb.org/3"
export function get(url) {
    return fetch(API+url, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTVjNzQ3MmRjN2ZhMjljN2I3MGFhNjQ2N2FmZTFjOCIsInN1YiI6IjYxMjY5YWEzYWQ1OWI1MDA0MzY4ZDc5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oAy-nD67FaurNHrlfYyUkki46jl6Y2UCMkt3CuElopA",
        "Content-Type": "application/json;charset=utf-8",
      },
    })
    .then((result) => result.json());
}