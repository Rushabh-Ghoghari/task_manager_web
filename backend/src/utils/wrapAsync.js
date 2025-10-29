export default function wrapAsync(fn) {
    return (req, res, next) => {
        // catch() any errors and pass to next in chain
        fn(req, res, next).catch(next);
    }
}