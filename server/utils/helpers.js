const { parse } = require("path");

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
                currentProduct['name'] = accumulateProduct[lastIndex].productName
            } else {
                currentProduct[spec] = current[specIndex];
                currentProduct['name'] = accumulateProduct[lastIndex].productName
            }
        });

        let tempObj = {}
        const finalFormattedProduct = []
        for (let property in currentProduct) {

            if (property === 'carrier' || property === 'name' || property === 'Storage Size') {
                tempObj = { ...tempObj, [convertToCamel(property)]: currentProduct[property] };
            } else {
                tempObj = { ...tempObj, grade: property, price: Number(currentProduct[property].replace(",", "").replace("$", "")) }
            }
            if (tempObj.grade || tempObj.price) {
                finalFormattedProduct.push(tempObj)
            }
        }

        dataArray.push(...finalFormattedProduct)

        return accumulateProduct;
        
    }, [])

    return dataArray;
};

module.exports = {
    formatData
}