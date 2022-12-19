function parseText(text) {
    const regexRule = /([\s\S]+?[!?\.\n]+)(\s+)/g;

    let sentencesArr = [];
    let matches = text.matchAll(regexRule);

    let lastIndex = 0;
    let lastLength = 0;

    for (let match of matches) {
        let sentence = match[1]
        let whitespaces = match[2]
        sentencesArr.push({sentence, whitespaces})

        lastIndex = match.index;
        lastLength = match[0].length;
    }

    lastIndex = lastIndex || 0;
    sentencesArr.push({sentence: text.slice(lastIndex+lastLength), whitespaces: ""});

    return sentencesArr;
} 

function getColorFromLength(length) {
    const lengthToColorMap = {
        '1-2': 'red',
        '3-4': 'green',
        '5-6': 'blue',
        '7-11': 'yellow',
        '12+': 'pink',
    };

    for (const range in lengthToColorMap) {
        if (range === '12+') {
            if (length >= 12) {
                return lengthToColorMap[range];
            }
        } else {
            const [min, max] = range.split('-');
            if (length >= Number(min) && length <= Number(max)) {
                return lengthToColorMap[range];
            }
        }
    }

    return 'pink'; // length 0
}


function addColorProp(nodes) {
    const coloredNodes = nodes.slice(); 
    coloredNodes.forEach(node => {
        const sentenceLen = node.sentence.split(/\s+/).length
        node.color = getColorFromLength(sentenceLen);
    })
    return coloredNodes;
}

export function getTextNodes(text) {
    const parsedText = parseText(text)
    const coloredTextNodes = addColorProp(parsedText)
    return coloredTextNodes
}