import { IArtist } from "@/interfaces";
import useSWR, { SWRConfiguration } from "swr";

// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());


export const useArtists = (url:string, config:SWRConfiguration = {}) => {
    // const { data, error, isLoading } = useSWR<IArtist[]>(`/api${url}`, fetcher, config);
    const { data, error, isLoading } = useSWR<IArtist[]>(`/api${url}`, config);

    return {
        artists: data || [],
        isLoading: !error && !data,
        isError: error
    }
}