export default mid => (req, res, next) => mid(req, res, next).catch(next);
