export const timeOfMyRequest = (req, rs ,next) => {
  req.user.timeOfMyRequest = new Date()
  next()
}