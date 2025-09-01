export default function prepareAllFetchingUrl(
  baseUrl: string,
  page: number,
  perPage: number,
  searchQuery: string,
  sortOrder: string
): string {
  baseUrl += `?page=${page}&perPage=${perPage}`;

  // I tried this console log to see the state data type
  // console.log(typeof(searchQuery), typeof(sortOrder));

  if (searchQuery) {
    baseUrl += `&filter=(name~'${searchQuery}')`;
  }

  const sortParam = sortOrder === "desc" ? "-name" : "name";

  baseUrl += `&sort=${sortParam}`;

  return baseUrl;
}
