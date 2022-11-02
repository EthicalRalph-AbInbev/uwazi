export class APIResponse {
  public constructor(
    public data: unknown,
    public success: boolean,
    public message: string,
  ) {}
}
