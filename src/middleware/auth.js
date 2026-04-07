const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== 'Bearer TOKEN123') {
    return res.status(401).json({
      error: 'Unauthorized',
      message: 'Token de autenticación inválido o ausente. Usa Bearer TOKEN123'
    });
  }

  next();
};

module.exports = authMiddleware;
