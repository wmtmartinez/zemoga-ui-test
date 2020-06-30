import njwt from 'njwt';

const {
    APP_SECRET = '*zemoga#ui#test*',
    APP_BASE_URL = 'http://localhost:5000'
} = process.env;

import { users } from './users.controller';

export function encodeToken(tokenData) {
    return njwt.create(tokenData, APP_SECRET).compact();
}

export function decodeToken(token) {
    return njwt.verify(token, APP_SECRET).body;
}

export const jwtAuthenticationMiddleware = (req, res, next) => {
    const token = req.header('Access-Token');

    if(!token) {
        return next();
    }

    try {
        const decoded = decodeToken(token);
        const { userId } = decoded;

        if(users.find(user => user.username === userId)) {
            req.userId = userId;
        }
        
    } catch(e) {
        return next();
    }

    next();
}

export async function isAuthenticatedMiddleware(req, res, next) {
    if(req.userId) {
        return next();
    }
    res.json({error: { code: 0, message: 'User not authenticated'} });
}

export async function jwtLogin(req, res) {
    
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password );
    
    if(!user) {
        return res.json({error: { code: 3, message: 'Invalid username or password'} });
    }

    const accessToken = encodeToken({userId: user.username });
    return res.json({user, accessToken });
}