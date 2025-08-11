export default function prepareAllFetchingUrl(baseUrl, page, perPage, searchQuery, sortOrder) {
    baseUrl += `?page=${page}&perPage=${perPage}`;

    if (searchQuery) {
        baseUrl += `&filter=(name~'${searchQuery}')`;
    }

    const sortParam = sortOrder === "desc" ? "-name" : "name";

    baseUrl += `&sort=${sortParam}`;

    return baseUrl;
}