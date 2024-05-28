function calculateWeights(arrString) {
    const weights = {};
    let i = 0;
    while (i < arrString.length) {
        let j = i;
        while (j < arrString.length && arrString[j] === arrString[i]) {
            j++;
        	const substr = arrString.slice(i, j);
            const weight = (arrString.charCodeAt(i) - 'a'.charCodeAt(0) + 1) * substr.length;
        	weights[substr] = weight;
        }
        i++;
    }
    return weights;
}

function weightedStrings(s, queries) {
    const allWeighteds = calculateWeights(s);
    const results = [];
    for (let q of queries) {
        let found = false;
        for (let weight of Object.values(allWeighteds)) {
            if (q === weight) {
                results.push("Yes");
                found = true;
                break;
            }
        }
        if (!found) {
            results.push("No");
        }
    }
    return results;
}

const allString = "abbcccd";
const queries = [1, 3, 9, 8];
console.log(weightedStrings(allString, queries));
