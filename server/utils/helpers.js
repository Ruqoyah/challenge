const formatData = (data) => {
    const dataArray = [];

    const convertToCamel = (str) => {
        return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
    }

    data.reduce((accumulateProduct, current) => {
        if (current.length === 1) {
            return accumulateProduct.concat({
                productName: current[0],
                isNewProduct: true,
            });
        }
        const lastIndex = accumulateProduct.length - 1;

        if (accumulateProduct[lastIndex].isNewProduct) {
            accumulateProduct[lastIndex] = {
                ...accumulateProduct[lastIndex],
                isNewProduct: false,
                specification: current,
            };
            return accumulateProduct;
        }

        const currentProduct = {};
        accumulateProduct[lastIndex].specification.forEach((spec, specIndex) => {
            if (spec.length < 1) {
                currentProduct['carrier'] = current[specIndex]
                currentProduct['productName'] = accumulateProduct[lastIndex].productName
            } else {
                currentProduct[convertToCamel(spec)] = current[specIndex];
                currentProduct['productName'] = accumulateProduct[lastIndex].productName
            }
        });

        dataArray.push(currentProduct)

        return accumulateProduct;
    }, [])

    return dataArray;
};

module.exports = {
    formatData
}