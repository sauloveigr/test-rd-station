// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  const { selectedPreferences, selectedFeatures, selectedRecommendationType } =
    formData;

  const filteredProducts = products.filter((product) => {
    const hasPreferences = selectedPreferences?.some((preference) =>
      product.preferences.includes(preference)
    );
    const hasFeatures = selectedFeatures
      ? selectedFeatures.some((feature) => product.features.includes(feature))
      : true;

    return hasPreferences && hasFeatures;
  });

  if (selectedRecommendationType === 'SingleProduct') {
    return filteredProducts.slice(-1);
  }

  return filteredProducts;
};

export default { getRecommendations };
