import { getTextNodes } from './hl-utilities';

const HighlightSpans = ({text}) => {
    return (
        <>
            {getTextNodes(text).map((textNode) => (
                <>
                    <span style={{background: textNode.color}}>
                        {textNode.sentence}
                    </span>
                    <span>
                        {textNode.whitespaces}
                    </span>
                </>
            ))}
        </>
    )
}

export default HighlightSpans;