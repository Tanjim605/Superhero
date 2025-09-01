export const fetchSuperheroDetails = async (id: string): string => {
    const response = await fetch(`https://superhero-api.innovixmatrixsystem.com/api/collections/superheros/records/${id}`);
    if (!response.ok) {
        throw new Error('Fetch failed');
    }
    return response.json();
};

export const fetchSuperheroesByApi = async (url: string): string => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};
