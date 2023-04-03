export class User {
  public id: number;
  public name: string;
  public username: string;
  public role: string;
  private password?: string;
  private _token: string;
  private _tokenExpirationDate: Date;

  constructor(
    id: number,
    name: string,
    username: string,
    role: string,
    __token: string,
    password?: string
  ) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.role = role;
    this._token = __token;
    if (this._token) {
      this._tokenExpirationDate = this.getExpiryDate(this._token);
    }
    if (password) {
      this.password = password;
    }
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

  get tokenExpirationDate() {
    return this._tokenExpirationDate;
  }

  getExpiryDate(token: string) {
    // Split the token into header, payload, and signature
    const [header, payload, signature] = token.split('.');

    // Decode the payload from base64
    const decodedPayload = decodeURIComponent(
      window
        .atob(payload)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    // Parse the payload as JSON
    const payloadObj = JSON.parse(decodedPayload);

    // Extract the expiration time from the payload
    const expiryTime = payloadObj.exp;

    // Convert the expiry time to a Date object
    const expiryDate = new Date(expiryTime * 1000);

    // Return the expiry date as a string in ISO format
    return expiryDate;
  }
}
