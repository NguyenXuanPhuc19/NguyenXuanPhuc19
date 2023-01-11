export default function $(element) {
    const elements = document.querySelectorAll(element);
    // eslint-disable-next-line eqeqeq
    return elements.length == 1 ? elements[0] : elements;
}