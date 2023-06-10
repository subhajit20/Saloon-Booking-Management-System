
export interface TokenData {
    userId: Number;
}
export interface Username {
  name: string;
}

  declare global {
    namespace Express {
      interface Request {
        tokenData: TokenData;
        username:Username
      }
    }
  }