export interface HttpResponse<T> {
  data: T;
  success: boolean;
  message: string;
}
