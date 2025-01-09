const asyncHandlers = (requestHandlers) => {
  (req, res, next) => {
    Promise.resolve(requestHandlers(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandlers };

// const asyncHandlers () => {}
// const asyncHandlers (func) => {()=> {}}
// const asyncHandlers (func) => ()=> {}

// const asyncHandlers = (func) => async (req, res, next) => {
//   try {
//     await func (req,res,next)
//   } catch (error) {
//     console.log("🚀 ~ asyncHandlers ~ error:", error);
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message || "Internal server error",
//     });
//   }
// };
