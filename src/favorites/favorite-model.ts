export const NoFavError = 'You currently have no favorites';

export interface Favorite {
    name: string;
    id: string;
    website: string;
}

export function removeFavoriteFromListById(idToRemove: string, favorites: Favorite[]): Favorite[] {
    return favorites.filter(fav => fav.id !== idToRemove);
}