export const useQuery = (location:string,query:string):(string|null) => {
  let q = new URLSearchParams(location);
  return q.get(query)
};
