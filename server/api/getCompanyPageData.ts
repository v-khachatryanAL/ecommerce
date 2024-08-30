export default eventHandler(async (event) => {
  const queryParams = getQuery(event);
  const runtimeConfig = useRuntimeConfig();
  const strapiURL = runtimeConfig.public.strapiURL;
  const authToken = runtimeConfig.public.authToken;

  return await fetch(
    `${strapiURL}/api/company-page?locale=${queryParams.locale}&populate[top_section][populate]=*&populate[image_with_content][populate]=*&populate[our_team][populate]=*&populate[core_values][populate][card_with_image][populate]=image&populate[core_values][populate][card]=*&populate[contact_us][populate]=*`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
});
