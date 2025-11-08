import { Location } from "maps/map-location";

export const NoFavsMsg = `You currently don't have any favorites saved.`;
export const NoFavError = `Oops, we've run into a problem loading your favorits, plase try again later.`;

// ToDo - move this later 
export function removeFavoriteFromListById(idToRemove: string, favorites: Location[]): Location[] {
    return favorites.filter(fav => fav.id !== idToRemove);
}