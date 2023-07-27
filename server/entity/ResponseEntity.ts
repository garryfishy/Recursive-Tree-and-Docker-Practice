export class ResponseEntity<T> {
  private success: boolean;
  private message: string;
  private data: any[];

  constructor(success: boolean, message: string, data: any[]) {
    this.success = success;
    this.message = message;
    this.data = data;
  }

  toJSON(): any {
    return {
      success: this.success,
      message: this.message,
      data: this.data,
    };
  }
}
