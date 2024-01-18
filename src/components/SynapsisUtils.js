
export const MAX_SENTENCES = 5;

export const  getFirstNSentences = (text, n) => {
const sentences = text.split('/[.!?]?');
    const sliced = sentences.slice(0, n);
    return sliced.join('.');
};