export interface uploadFile {
  name: string | undefined;
  size: number | undefined;
  duration:
    | {
        hours: number;
        minutes: number;
        seconds: number;
      }
    | undefined;
}
