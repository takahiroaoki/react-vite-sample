export class UrlUtils {
  static getQueryParams(): URLSearchParams {
    return new URLSearchParams(location.search);
  }
}
