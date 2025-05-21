import { ArtistModel } from "./artist.model";

export interface TrackModel {
    idd: string | number;
    name: string;
    album: string;
    cover: string;
    url: string;
    artist?: ArtistModel;
}