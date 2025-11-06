export type User = {
    firstName: string;
    lastName: string;
    userId: number;
    email: string;
}

export function getUserInitials(user: User): string {
    if (!user.firstName || !user.lastName) {
        return '?';
    }
    return user.firstName[0] + user.lastName[0];
}