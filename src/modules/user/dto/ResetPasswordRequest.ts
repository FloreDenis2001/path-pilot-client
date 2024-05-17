export default interface ResetPasswordRequest {
    email: string;
    password: string;
    code: string;
}