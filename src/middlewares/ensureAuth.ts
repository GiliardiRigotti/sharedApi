import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuth(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization

    if (!authToken) {
        response.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ")

    try {
        verify(token, "c2a0d19c-8918-4044-aa50-9f9e90aadf84")
        return next()
    } catch (error) {
        response.status(401).json({
            message: "Token is invalid"
        })
    }


}