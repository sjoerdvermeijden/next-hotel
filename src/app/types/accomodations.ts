export interface Trip {
    id: number;
    title: string,
    country: string,
    adress: string,
    short_description: string,
    facilities: Array<{
        id: number,
        icon: string,
        label: string,
    }>,
    accomodation_type: string,
    reviews: Array<{
        id: number,
        firstName: string,
        lastName: string,
        rating: number,
        review: string,
        country: string
    }>,
    images: string[]
}