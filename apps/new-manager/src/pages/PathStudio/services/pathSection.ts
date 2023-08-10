export const pathSection = async () => {
  const response = await fetch(
    'https://dev-content.iseazyengage.com/api/v1/path/sections/0189e146-82ac-7580-9045-6d7eb4bf2e44',
    {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTE2ODMxNDIsImV4cCI6MTcyMzIxOTE0Miwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiaXNlYXp5In0.8DOmnzbn1VDxPs_5zhxdrCK1rjgRQ9txH4a12slEa8BG8Ywxg9Db1iSo6fpGdLl9-PHRuvR_aMb2vORb4DcxP4OqmnLcLVsOa1yueFspGJZgtPrTM9wEg_v7aubAn28Sy0MYncGBnbFgbr3i3EiczfVqNVC7_S2b-gbLsL5HrAhHXx1fg_BPuvUftdNUdM1RvBqw0I0PixNNA8LFsmzq89Zxbyvbt4raSii2MIloUrCURUGRE31u5MPSEUk6cPTIPM8T8FpxfgG_fRNqfr7EDvpwChh-Orke1pUE1afwK27lSeZI8zEi-PwqY5BPvX3FwkscxqZaGAn0R3hPuqPwVw',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch section list');
  }

  const responseData = await response.json();
  return responseData.data;
};
