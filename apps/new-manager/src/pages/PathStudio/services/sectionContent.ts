export const sectionContent = async () => {
  const response = await fetch(
    'https://dev-content.iseazyengage.com/api/v1/content/list/section-content-uid?total=5',
    {
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product list');
  }

  const responseData = await response.json();
  return responseData.data;
};
