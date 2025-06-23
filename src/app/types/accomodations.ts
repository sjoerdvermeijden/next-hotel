export interface Trip {
    id: number;
    title: string,
    country: string,
    adress: string,
    facilities: string[],
    accomodation_type: string,
    ratings: [
        Array<{
            id: number,
            firstName: string,
            lastName: string,
            rating: number
        }>
    ],
    images: string[]
}