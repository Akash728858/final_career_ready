/**
 * JWT auth middleware
 */
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'career-platform-dev-secret';

export function createToken(userId) {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.userId;
  } catch {
    return null;
  }
}

/**
 * Require authentication - attach req.userId
 * bypassed for Demo Mode
 */
export function requireAuth(req, res, next) {
  req.userId = 'guest-user-id';
  next();
}
